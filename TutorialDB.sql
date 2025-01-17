PGDMP  /                     |         
   TutorialDB    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    51154 
   TutorialDB    DATABASE     �   CREATE DATABASE "TutorialDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "TutorialDB";
                postgres    false            �            1259    51404    Clients    TABLE     �   CREATE TABLE public."Clients" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Clients";
       public         heap    postgres    false            �            1259    51403    Clients_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Clients_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Clients_id_seq";
       public          postgres    false    216            �           0    0    Clients_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Clients_id_seq" OWNED BY public."Clients".id;
          public          postgres    false    215            �            1259    51411    Goods    TABLE     �  CREATE TABLE public."Goods" (
    id integer NOT NULL,
    productname character varying(255) NOT NULL,
    heattreatment character varying(255) NOT NULL,
    hydraulictesting character varying(255) NOT NULL,
    uzk character varying(255) NOT NULL,
    rgd character varying(255) NOT NULL,
    othersdocs character varying(255) NOT NULL,
    vik character varying(255) NOT NULL,
    technicalsolution character varying(255) NOT NULL,
    vsrnm character varying(255) NOT NULL,
    reportingpassport character varying(255) NOT NULL,
    control character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "ClientId" integer
);
    DROP TABLE public."Goods";
       public         heap    postgres    false            �            1259    51410    Goods_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Goods_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Goods_id_seq";
       public          postgres    false    218            �           0    0    Goods_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Goods_id_seq" OWNED BY public."Goods".id;
          public          postgres    false    217            �            1259    51425 	   materials    TABLE     0  CREATE TABLE public.materials (
    id integer NOT NULL,
    materialname character varying(255) NOT NULL,
    code character varying(255) NOT NULL,
    mass character varying(255) NOT NULL,
    normgood character varying(255) NOT NULL,
    normorder character varying(255) NOT NULL,
    note character varying(255) NOT NULL,
    pki character varying(255) NOT NULL,
    account character varying(255) NOT NULL,
    datepay character varying(255) NOT NULL,
    supplier character varying(255) NOT NULL,
    datearrival character varying(255) NOT NULL,
    datevk character varying(255) NOT NULL,
    dateotk character varying(255) NOT NULL,
    sertificate character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "GoodId" integer
);
    DROP TABLE public.materials;
       public         heap    postgres    false            �            1259    51424    materials_id_seq    SEQUENCE     �   CREATE SEQUENCE public.materials_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.materials_id_seq;
       public          postgres    false    220            �           0    0    materials_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.materials_id_seq OWNED BY public.materials.id;
          public          postgres    false    219            $           2604    51407 
   Clients id    DEFAULT     l   ALTER TABLE ONLY public."Clients" ALTER COLUMN id SET DEFAULT nextval('public."Clients_id_seq"'::regclass);
 ;   ALTER TABLE public."Clients" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            %           2604    51414    Goods id    DEFAULT     h   ALTER TABLE ONLY public."Goods" ALTER COLUMN id SET DEFAULT nextval('public."Goods_id_seq"'::regclass);
 9   ALTER TABLE public."Goods" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            &           2604    51428    materials id    DEFAULT     l   ALTER TABLE ONLY public.materials ALTER COLUMN id SET DEFAULT nextval('public.materials_id_seq'::regclass);
 ;   ALTER TABLE public.materials ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            �          0    51404    Clients 
   TABLE DATA           G   COPY public."Clients" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    216   �"       �          0    51411    Goods 
   TABLE DATA           �   COPY public."Goods" (id, productname, heattreatment, hydraulictesting, uzk, rgd, othersdocs, vik, technicalsolution, vsrnm, reportingpassport, control, "createdAt", "updatedAt", "ClientId") FROM stdin;
    public          postgres    false    218   #       �          0    51425 	   materials 
   TABLE DATA           �   COPY public.materials (id, materialname, code, mass, normgood, normorder, note, pki, account, datepay, supplier, datearrival, datevk, dateotk, sertificate, "createdAt", "updatedAt", "GoodId") FROM stdin;
    public          postgres    false    220   u#       �           0    0    Clients_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Clients_id_seq"', 2, true);
          public          postgres    false    215            �           0    0    Goods_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Goods_id_seq"', 2, true);
          public          postgres    false    217            �           0    0    materials_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.materials_id_seq', 3, true);
          public          postgres    false    219            (           2606    51409    Clients Clients_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Clients"
    ADD CONSTRAINT "Clients_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Clients" DROP CONSTRAINT "Clients_pkey";
       public            postgres    false    216            *           2606    51418    Goods Goods_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Goods"
    ADD CONSTRAINT "Goods_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Goods" DROP CONSTRAINT "Goods_pkey";
       public            postgres    false    218            ,           2606    51432    materials materials_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.materials
    ADD CONSTRAINT materials_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.materials DROP CONSTRAINT materials_pkey;
       public            postgres    false    220            -           2606    51419    Goods Goods_ClientId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Goods"
    ADD CONSTRAINT "Goods_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES public."Clients"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public."Goods" DROP CONSTRAINT "Goods_ClientId_fkey";
       public          postgres    false    218    4648    216            .           2606    51433    materials materials_GoodId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.materials
    ADD CONSTRAINT "materials_GoodId_fkey" FOREIGN KEY ("GoodId") REFERENCES public."Goods"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.materials DROP CONSTRAINT "materials_GoodId_fkey";
       public          postgres    false    220    4650    218            �   G   x�3�t��L�+1�4202�50�50U02�26�21�365�60�#�e�o�������\���~d)�=... L��      �   K   x�3�L��O1$��%id`d�k`�k`�`dlelbel�gnl�m`�Oʐ���2�Ss+�&��v�Jq��qqq ��Av      �   s   x�3�� Bd`d`d�k`�k`�`dlebhej�gij�m`�Oʐˈ37�$�(31��h����.4S00�20�25�3�0Cq<).c�FXH��IT�ͬ,��1�*����� O	h�     