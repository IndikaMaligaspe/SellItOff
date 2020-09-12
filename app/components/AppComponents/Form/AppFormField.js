import React from 'react'
import {useFormikContext} from 'formik'

import AppTextInput from '../AppTextInput'
import AppErrorMessage from './AppErrorMessage';


export default function AppFormField({fieldName,width=10, ...otherProps}) {
    const {setFieldTouched, setFieldValue, touched, errors, values} = useFormikContext()
    // console.log(fieldName)
    return (
        <>
            <AppTextInput
                onChangeText={text=>setFieldValue(fieldName, text)}
                value={values[fieldName]}
                onBlur={() => setFieldTouched(fieldName)}
                width={width}
                {...otherProps}
            />
            <AppErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
        </>
    )
}
