package com.anika.mobilefinancialservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserBasicInfoRequest {

    @NotNull
    @NotEmpty
    @Pattern(regexp = "([0-9]*)", message = "Account number should be numbers only.")
    @Size(max = 11, min = 11, message = "Account number should be 11 digits.")
    private String phoneNumber;

    @NotNull
    @NotEmpty
    @Pattern(regexp = "([0-9]*)", message = "Pin number should be numbers only.")
    @Size(max = 4, min = 4, message = "Account number should be 4 digits.")
    private String pin;
}
