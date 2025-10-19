# estructura db

Columna |          Tipo          | Ordenamiento | Nulable  |           Por omisión
---------+------------------------+--------------+----------+---------------------------------
 h_study | numeric(2,2)           |              |          |
 h_work  | numeric(2,2)           |              |          |
 km_run  | numeric(2,2)           |              |          |
 sleep   | numeric(2,2)           |              |          |
 fecha   | date                   |              |          |
 note    | character varying(100) |              |          |
 id      | integer                |              | not null | nextval('day_id_seq'::regclass)
Índices:
    "day_pkey" PRIMARY KEY, btree (id)

<!-- corrigiendo error -->
                                      Tabla «public.day»
 Columna |          Tipo          | Ordenamiento | Nulable  |           Por omisión
---------+------------------------+--------------+----------+---------------------------------
 h_study | numeric(4,2)           |              |          |
 h_work  | numeric(4,2)           |              |          |
 km_run  | numeric(4,2)           |              |          |
 sleep   | numeric(4,2)           |              |          |
 fecha   | date                   |              |          |
 note    | character varying(100) |              |          |
 id      | integer                |              | not null | nextval('day_id_seq'::regclass)
Índices:
    "day_pkey" PRIMARY KEY, btree (id)


database : di
usuario: postgres
puerto: 5001
tabla(public): day