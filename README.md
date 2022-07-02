<img src="src_img/carshopcolor.png" height="200">

Car Shop è un progetto creato per l'esame "Tecnologie Web" 2021/2022 da Davide Baldelli e Leonardo Armuzzi.

Per popolare il database sarà necessario il segunte [dump](res/prog_tw.sql). Il database creato dovra avere come codifica caretteri **utf8mb4_general_ci**. Per accedere al database attraverso le api andrà inserito un json (il template si trova [qui](res/db_cred.json)) con le informazioni del database nella cartella **local_res**. 

Per implementare le operazioni di autenticazione delle api abbiamo usato JWT. La chiave (una stringa casuale qualsiasi) andrà inserita in un file json (il template si trova [qui](res/token_secret.json)) all'interno della cartella **local_res**.

Per testare le funzionalità da utente base si può usare il seguente utente: **username** : user, **password** : user, o un qualsiasi nuovo utente.<br/>
Per testare le funzionalita di admin si può usare il seguente account : **username** : admin, **password** : admin.
