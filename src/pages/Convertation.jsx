import React, { useMemo, useState } from 'react';
import Path from '../service/Path.service'
import { useParams } from 'react-router-dom';
import { Uploader } from 'rsuite';
import Text from '../components/UI/Text/Text';
import '../styles/Convertation.css';


function Convertation() {
    const [load, setLoad] = useState(false)
    const path = useParams();

    const data = useMemo(() => {
        const splited = path.convert.split('-')

        const from = splited[0]
        const to = splited[1]

        return {
            from,
            to,
            accept: from,
        }
    }, [path])

    // проверка, что ссылка коректная 
    // и у нас есть функционал с такой конвертацией
    // возможно стоит сделать просто перенаправление на home
    if (!Path.convertInterceptor(path.convert)) {
        return (
            <div className='convertation'>
                <Text size='xl'>
                    page not found
                </Text >
            </div>
        );
    }


    return (
        <div className='convertation' >
            <Uploader
                action='http://localhost:5000'
                accept={`.${data.accept}`}
                data={{
                    from: data.from,
                    to: data.to,
                }}
                multiple={false}
                listType='picture-text'
                disabled={load}
                onUpload={() => setLoad(true)}
                draggable
                onSuccess={() => console.log('good')}
            >
                <div>
                    <span className='drag'>
                        Выберите {data.from} файлы или перетащите их сюда
                    </span>
                </div>
            </Uploader>
        </div>
    );
}


export default Convertation;