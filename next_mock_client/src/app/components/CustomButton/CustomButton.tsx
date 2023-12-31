import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

enum ButtonTypes {
    primary,
    secondary,
    tertiary
}

interface ButtonProps extends MuiButtonProps {
    // add keys of enum ButtonType
    role: keyof typeof ButtonTypes
}
    
const roles = {
    primary: {
        background: 'bg-slate-800',
        color: 'white'
    },
    secondary: {
        background: 'bg-slate-800/20',
        color: 'white'
    },
    tertiary: {
        background: 'bg-slate-800/0',
        color: 'white'
    }

}

export default function Button({
  children,
  role
}: ButtonProps) {

  return <MuiButton className={`rounded-md ${roles[role]}`}>{children}</MuiButton>
}