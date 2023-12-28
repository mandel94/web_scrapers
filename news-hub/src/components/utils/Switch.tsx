
import { FC, ReactElement, ReactNode } from 'react'

// https://dev.to/musatov/conditional-rendering-in-react-with-a-switch-component-23ph#:~:text=Controlling%20the%20rendering%20of%20UI,it%20in%20a%20declarative%20way.


interface CaseProps {
    children?: ReactNode
    when: string | number
  }
  
interface DefaultProps {
    children?: ReactNode
    when?: never
  }

interface SwitchComponentProps {
    children?: ReactNode
    condition: string | number
  }

  
  interface SwitchComponentType extends FC<SwitchComponentProps> {
    Case: FC<CaseProps>
    Default: FC<DefaultProps>
  }

  

  export const Switch: SwitchComponentType = ({ condition, children }) => {
    if (!children) {
      return null
    }
  
    const arrayOfChildren = Array.isArray(children) ? children : [children]
    const cases = arrayOfChildren.filter((child) => child.props.when == condition)
    const defaultCases = arrayOfChildren.filter((child) => !child.props.when)
  
    if (defaultCases.length > 1) { 
      throw new Error('Only one <Switch.Default> is allowed')
    }
  
    const defaultCase = defaultCases[0]
  
    return cases.length > 0 ? <>{cases}</> : <>{defaultCase}</>
  }

  Switch.Case = ({ children }) => {
    return <>{children}</>
  }
  
  Switch.Default = ({ children }) => {
    return <>{children}</>
  }