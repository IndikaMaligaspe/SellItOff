import React from 'react'
import { useFormikContext } from 'formik'

import AppButton from '../AppButton'

export default function AppFormSubmit({...otherProps}) {
    const {handleSubmit} = useFormikContext()
    return <AppButton  {...otherProps}  onPress={handleSubmit}/>;
}
