import React from 'react'
import {useFormikContext} from 'formik'

import AppTextInput from '../AppTextInput'
import AppErrorMessage from './AppErrorMessage';


export default function AppFormField({fieldNname, ...otherProps}) {
    const {setFieldTouched, handleChange, touched, errors} = useFormikContext()
    return (
        <>
            <AppTextInput
                onChangeText={handleChange(fieldNname)}
                onBlur={() => setFieldTouched(fieldNname)}
                {...otherProps}
            />
            <AppErrorMessage error={errors[fieldNname]} visible={touched[fieldNname]} />
        </>
    )
}
