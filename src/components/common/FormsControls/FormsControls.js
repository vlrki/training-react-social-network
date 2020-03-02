import React from "react";

const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className='form-group'>
            {props.children}
            {hasError && <div class="invalid-feedback">{meta.error}</div>}
        </div>
    )
}

export const Textarea = (props) => {

    const { input, meta, child, ...restProps } = props;
    const hasError = meta.touched && meta.error;

    return (
        <FormControl {...props}>
            <textarea {...input} {...props} className={"form-control" + " " + (hasError ? 'is-invalid' : '')}></textarea>
        </FormControl>
    )
}

export const Input = (props) => {

    const { input, meta, child, ...restProps } = props;
    const hasError = meta.touched && meta.error;

    return (
        <FormControl {...props}>
            <input type="text" {...input} {...restProps} className={"form-control" + " " + (hasError ? 'is-invalid' : '')} />
        </FormControl>
    )
}

export const Password = (props) => {

    const { input, meta, child, ...restProps } = props;
    const hasError = meta.touched && meta.error;

    return (
        <FormControl {...props}>
            <input type="password" {...input} {...restProps} className={"form-control" + " " + (hasError ? 'is-invalid' : '')} />
        </FormControl>
    )
}