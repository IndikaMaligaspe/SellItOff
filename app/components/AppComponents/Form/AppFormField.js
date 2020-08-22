import React from 'react'
import {useFormikContext} from 'formik'

import AppTextInput from '../AppTextInput'
import AppErrorMessage from './AppErrorMessage';


export default function AppFormField({fieldName, ...otherProps}) {
    const {setFieldTouched, handleChange, touched, errors} = useFormikContext()
    // console.log(fieldName)
    return (
        <>
            <AppTextInput
                onChangeText={handleChange(fieldName)}
                onBlur={() => setFieldTouched(fieldName)}
                {...otherProps}
            />
            <AppErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
        </>
    )
}
