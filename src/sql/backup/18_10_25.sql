--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: day; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.day (
    h_study numeric(4,2),
    h_work numeric(4,2),
    km_run numeric(4,2),
    sleep numeric(4,2),
    fecha date,
    note character varying(100),
    id integer NOT NULL
);


ALTER TABLE public.day OWNER TO postgres;

--
-- Name: day_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.day_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.day_id_seq OWNER TO postgres;

--
-- Name: day_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.day_id_seq OWNED BY public.day.id;


--
-- Name: day id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.day ALTER COLUMN id SET DEFAULT nextval('public.day_id_seq'::regclass);


--
-- Data for Name: day; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.day (h_study, h_work, km_run, sleep, fecha, note, id) FROM stdin;
7.00	\N	3.00	8.00	2025-09-29	\N	1
7.00	\N	\N	8.00	2025-09-30	\N	2
5.00	\N	\N	8.00	2025-10-01	\N	3
3.00	\N	7.00	8.00	2025-10-02	\N	4
4.50	\N	0.00	8.00	2025-10-03	\N	5
5.50	\N	4.00	8.00	2025-10-03	\N	6
\.


--
-- Name: day_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.day_id_seq', 6, true);


--
-- Name: day day_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.day
    ADD CONSTRAINT day_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

