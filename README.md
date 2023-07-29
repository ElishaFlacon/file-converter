<h1> 
     ♻️ File Converter
</h1>

<h3>
File Converter - это Fullstack приложение, которое может конвертировать любой файл в PDF и обратно. Front-end написан на TypeScript и использует библиотеки React, Redux, Axios и библиотеку компонентов React-Suite. Back-end написан на Python и использует фреймворк Django REST framework для работы REST API. База данных SQLite (входящая в Django REST framework)

</br>
</br>
</br>

> В этом репозитории находится Front-end приложения, а Back-end находится <a href="https://github.com/Alexmdvdv/ConverterFilesBackend/">здесь</a>

</br>

> Вы можете протестировать работу приложения прямо <a href="https://eelisey.store/">здесь</a>
</h3>



</br>



<h2>
  🛠️ Инструменты, которые использовались при разработке клиентской части приложения:
</h2>

- Front-end:
     - TypeScript
     - React
     - Redux
     - React-Suite
- Back-end:
     - Python
     - Django REST framework
     - SQLite




</br>



<h2>
  🚀 Зпуск приложения:
</h2>

- Зпускаем front-end:
    - `git clone https://github.com/ElishaFlacon/file-converter.git`
     - `cd file-converter`
     - `npm install`
     - `npm audit fix` (если появились ошибки)
     - не забываем поменять адрес API
     - `npm start`
- Зпускаем back-end, через Docker:
     - устанавливаем Docker
     - `git clone https://github.com/Alexmdvdv/ConverterFilesBackend.git`
     - `cd ConverterFilesBackend`
     - запуск с SSL
          - меняем домен в файле `ConverterFilesBackend/nginx/nginx.conf` на свой
          - в каталоге `ConverterFilesBackend/nginx` создаем каталог `certs`
          - в созданный каталог  `certs` кладем SSL сертификат и SSL ключ на ваш домен
          - в файле `ConverterFilesBackend/nginx/nginx.conf` в строчках `ssl_certificate` и `ssl_certificate_key` меняем названия сертификатов на ваши
     - запуск без SSL
          - в файле `ConverterFilesBackend/nginx/nginx.conf` переместите из второго блока `server` в первый блок `server` блок `location` и  удалите второй блок `server`
          - затем из первого блока server удалите строку `return 301 https://.../`
          - и из файла `ConverterFilesBackend/docker-compose.yml` из блока `nginx` удалите блок `volumes`
     - `docker-compose build`
     - `docker-compose run`
- Зпускаем back-end, локальный запуск:
     - `git clone https://github.com/Alexmdvdv/ConverterFilesBackend.git`
     - `cd ConverterFilesBackend`
     - `pip install -r ./requirements.txt`
     - `python manage.py migrate`
     - `python manage.py runserver`
     

<h3>
    Запускаем, не работет, ура! 🗿🚬
</h3>



</br>



<h2>
 📺 Демо:
</h2>

- <a href="https://eelisey.store/">Нажать чтобы демо!</a>
- <a href="https://github.com/ElishaFlacon/file-converter/assets/83610362/91920ed0-759a-443a-b5b4-1465eb6ad2bc">Нажать чтобы демо видео!</a>
- <video src="https://github.com/ElishaFlacon/file-converter/assets/83610362/91920ed0-759a-443a-b5b4-1465eb6ad2bc" />



</br>



<h2>
⚡ Немного дополнительной информации:
</h2>

- На данный момент проект полностью реализован!
- Front-end приложения находится на хостинге render.com
- Back-end и База данных находится на vps сервере на хостингe timeweb.cloud и разворачивается с помощью Docker
- P.S. Все баги и недочеты - это фичи




<br/>
<br/>
<br/>
<br/>
<br/>
<br/>



<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=d179b8&height=64&section=footer"/>
</p>
