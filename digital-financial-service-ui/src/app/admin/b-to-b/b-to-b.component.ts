import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DfsHttpServiceService} from "../../shared/dfs-http-service.service";
import {Router} from "@angular/router";
import {TransactionReq} from "../../shared/models/transaction";
import {DataContextService} from "../../shared/data-context.service";

@Component({
  selector: 'app-b-to-b',
  templateUrl: './b-to-b.component.html',
  styleUrls: ['./b-to-b.component.scss']
})
export class BToBComponent implements OnInit {

  hidePin: boolean = true;

  BToBForm = this.fb.group({
    agAccNo: ['', Validators.compose([Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern("(01[3-9]\\d{8})$")])],
    bankTxnId: ['', Validators.compose([Validators.required, Validators.maxLength(40), Validators.minLength(1)])],
    amount: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(1)])],
    pin: ['', Validators.compose([Validators.required, Validators.maxLength(4), Validators.minLength(4), Validators.pattern("^(0|[1-9][0-9]*)$")])]
  },);

  constructor(private fb: FormBuilder, private dfsHttpServiceService: DfsHttpServiceService, private router: Router,
              private dataContextService: DataContextService) {
  }

  ngOnInit(): void {
  }

  confirmB2B() {

    let transactionReq: TransactionReq = {
      fromAccNo: ``,
      toAccNo: this.BToBForm.value.agAccNo,
      txnAmount: this.BToBForm.value.amount,
      txnType: `B2B_AG`,
      reference: this.BToBForm.value.bankTxnId,
      pin: this.BToBForm.value.pin
    }

    this.dfsHttpServiceService.transaction(transactionReq)
      .subscribe(res => {
        this.dataContextService.transactionResultNextRout = `/admin/b2b`;
        this.router.navigate([`/admin/txn-result`], {state: {data: res}})
      });
  }
}
