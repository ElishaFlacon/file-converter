import Message from 'rsuite/Message';
import { useToaster } from 'rsuite/toaster';


// хук возвращает функцию, которая при ее вызове отображает сообщения с задаными параметрами
export const useShowMessage = (placement = 'bottomStart', duration = 5000) => {
    const toaster = useToaster();


    return (title, type) => {
        toaster.push(
            (<Message showIcon type={type} closable>{title}</Message>),
            { placement, duration }
        )
    }
}