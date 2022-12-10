import { ButtonGroup, IconButton, Tooltip } from '@mui/material'
import { formButtons } from './formIconButtons'

const FormButtonGroup = () => {
  return (
    <ButtonGroup>
        { formButtons.map(button =>(
            <Tooltip key={button.name} title={button.title}>
                <IconButton sx={{ color: '#90caf9'}} size={'small'}>
                    { button.icon }
                </IconButton>
            </Tooltip>
        ))}
    </ButtonGroup>
  )
}

export default FormButtonGroup