import React from 'react'
import { useFormikContext } from 'formik'

import AppFormSubmitIcon from '../AppButton'

export default function AppFormSubmitIcon({...otherProps}) {
    const {handleSubmit} = useFormikContext()
    return <AppButton  {...otherProps}  onPress={handleSubmit}/>;
}
