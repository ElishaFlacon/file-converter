import React, { FC, useEffect, useState } from 'react';
import Text from '../../components/UI/Text/Text';
import { Panel, Divider, ButtonGroup, Button, Stack, IconButton } from 'rsuite';
import classes from './Profile.module.css';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { useShowMessage } from '../../hooks/useShowMessage';
import CloseIcon from '@rsuite/icons/Close';
import { useNavigate } from 'react-router-dom';
import FileService from '../../service/File.service';
import { filesGetAll } from '../../store/action-creators/file';
import { API_URL } from '../../config';
import { IFile } from '../../types/File';
import AuthService from '../../service/Auth.service';


const Profile: FC = () => {
    const { isAuth, data, loading, error } = useTypedSelector(state => state.user);
    const files = useTypedSelector(state => state.file);
    const [fileList, setFileList] = useState<IFile[] | null>(null);

    const dispatch: any = useDispatch();

    const showMessage = useShowMessage();
    const navigate = useNavigate();

    const handleResetPassword = () => {
        if (data) {
            AuthService.forgotPassword(data.user.email);
            showMessage(`Сообщение о сбросе пароля отправлено на вашу почту: ${data.user.email}`, 'success');
        }
    }

    useEffect(() => {
        dispatch(filesGetAll());
    }, []);

    useEffect(() => {
        if (files.data?.length !== 0) {
            setFileList(files.data);
        }
    }, [files.data]);

    const handleDelete = (file_id: number) => {
        FileService.deleteUserFile(file_id);
        setFileList(fileList?.filter((file) => file.id !== file_id) || null);
    }


    return (
        <div>
            <Panel className={classes.panel} bordered shaded>
                <Text size='xs'>Профиль</Text>
                <Divider />
                <Stack alignItems='flex-start' direction='column' >
                    <Text size='mn'><b>Имя:</b> {data?.user.username}</Text>
                    <Text size='mn'><b>Почта:</b> {data?.user.email}</Text>
                    <Text size='mn'><b>Страна:</b> {data?.user.country}</Text>
                </Stack>
                <Divider />
                <Button
                    className={classes.bottom_button}
                    onClick={() => navigate('/profile/update')}
                    appearance='link'
                    size='sm'
                >
                    Изменить профиль
                </Button>
                <Button
                    className={classes.bottom_button}
                    onClick={handleResetPassword}
                    appearance='link'
                    size='sm'
                >
                    Отправить запрос на сброс пароля
                </Button>
            </Panel>

            <Panel className={classes.panel} bordered shaded>
                <Text size='xs'>Файлы</Text>
                <Divider />
                <Stack alignItems='stretch' direction='column' spacing='8px'>
                    {fileList
                        ?
                        fileList.length !== 0
                            ?
                            fileList.map((file) => (
                                <ButtonGroup key={file.id} className={classes.file_button_container} block>
                                    <Button
                                        className={classes.file_button}
                                        onClick={() => FileService.downloadByUrl(`${API_URL}/file/download/${file.id}/`)}
                                        block
                                    >
                                        {`${file.name}.${file.previous_format} в ${file.current_format}: ${file.created_at}`}
                                    </Button>
                                    <IconButton
                                        onClick={() => handleDelete(file.id)}
                                        icon={<CloseIcon />}
                                    />
                                </ButtonGroup>
                            ))
                            :
                            <Text size='mn'>Нет файлов</Text>
                        :
                        <Text size='mn'>Нет файлов</Text>
                    }
                </Stack>
            </Panel>
        </div>
    );
}


export default Profile;