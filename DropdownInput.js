import React from 'react'

import TextInput from './TextInput'

const TextDropdown = ({dropdownText, updateText}) => {
    return (
        <div class="row ddWidth offMarg ">
            <TextInput
                addStyle="fullWidth"
                id={"dropdownInput"}
                prompt={"Enter a Text"}
                update={updateText}
                value={dropdownText}>
            </TextInput>
        </div>
    )
}

export default TextDropdown