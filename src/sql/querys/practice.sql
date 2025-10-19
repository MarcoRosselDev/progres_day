INSERT INTO day(h_study, km_run, sleep, fecha) VALUES(7 , 3 , 8, '2025-09-29');
INSERT INTO day(h_study, sleep, fecha) VALUES(7 , 8, '2025-09-30');
INSERT INTO day(h_study, sleep, fecha) VALUES(5 , 8, '2025-10-01');
INSERT INTO day(h_study, km_run, sleep, fecha) VALUES(3 , 7 , 8, '2025-10-02');
INSERT INTO day(h_study, km_run, sleep, fecha) VALUES(4.5 , 0 , 8, '2025-10-03');
INSERT INTO day(h_study, km_run, sleep, fecha) VALUES(5.5 , 4 , 8, '2025-10-03');

/* problema con el NUMERIC(2,2); ==> indica numeros 0.99
no 99.99 entonces para numeros mayores a 1 salta error
 */
ALTER TABLE day ALTER COLUMN h_study TYPE NUMERIC(4,2);
ALTER TABLE day ALTER COLUMN h_work TYPE NUMERIC(4,2);
ALTER TABLE day ALTER COLUMN km_run TYPE NUMERIC(4,2);
ALTER TABLE day ALTER COLUMN sleep TYPE NUMERIC(4,2);