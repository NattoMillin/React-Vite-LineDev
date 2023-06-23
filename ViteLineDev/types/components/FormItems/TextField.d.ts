/// <reference types="react" />
import { TextFieldProps as MuiTextFieldProps } from "@mui/material";
export type TextFieldProps = MuiTextFieldProps & {
    inputRef?: MuiTextFieldProps["ref"];
    errorMessage?: string;
};
export declare const TextField: React.FC<TextFieldProps>;
