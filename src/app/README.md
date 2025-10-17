# Esta es la ida principal sobre la base de datos

- primero necesitamos aprender sobre el type DATE para la fecha
- luego necesitaremos la siguiente informacion:  
  1. horas de estudio
  2. horas de trabajo
  3. kilometros recorridos
  4. horas dormidas

- la idea es llevar un registro de las actividades y el progreso o variacion de estas.

# DATE | postgresql

DATE: Almacena una fecha de calendario (año, mes, día) sin componente de hora. 
Rango: 4713 a. C. a 5874897 d. C. 
Formato: YYYY-MM-DD. 

```posgresql
CREATE 
```

# bachup base de datos
<!-- buscar la ruta asta postgresl\n-version\bin   por ejemplo
C:\Program Files\PostgreSQL\17\bin -->

1. ejecutar cdm como administrador
2. aplicar cd .. asta quedarnos en el directorio base de c = C:\
3. desde aqui pegamos la ruta para movernos hasta la carpeta bin de posgresql
4. aplicamos el siguiente comando
```shell
pg_dump -U <nombre_de_usuario> -W -h <puerto_de_host> <nombre_db_x> > <ruta_output>
pg_dump -U postgres -W -h localhost postgres>c:\backup_db.sql
# falto el -p 5001 que espesifica el puerto si es que estamos trabajando con el por defecto = 5432
pg_dump -U postgres -W -h localhost -p 5001 postgres > c:\backup_db.sql
```