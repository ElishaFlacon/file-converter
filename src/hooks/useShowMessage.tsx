import Message from 'rsuite/Message';
import { TypeAttributes } from 'rsuite/esm/@types/common';
import { PlacementType } from 'rsuite/esm/toaster/ToastContainer';
import { useToaster } from 'rsuite/toaster';


type Hook = (placement: PlacementType, duration: number) => Under;
type Under = (title: string, type: TypeAttributes.Status | undefined) => void;


// хук возвращает функцию, которая при ее вызове отображает сообщения с задаными параметрами
export const useShowMessage: Hook = (placement = 'bottomStart', duration = 5000) => {
    const toaster = useToaster();


    return (title, type) => {
        toaster.push(
            (<Message showIcon type={type} closable>{title}</Message>),
            { placement, duration }
        )
    }
}