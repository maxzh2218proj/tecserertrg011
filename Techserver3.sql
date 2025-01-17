PGDMP                      |            Techserver3    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    51883    Techserver3    DATABASE     �   CREATE DATABASE "Techserver3" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "Techserver3";
                postgres    false            �            1259    51884    Clients    TABLE     �   CREATE TABLE public."Clients" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Clients";
       public         heap    postgres    false            �            1259    51887    Clients_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Clients_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Clients_id_seq";
       public          postgres    false    215            �           0    0    Clients_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public."Clients_id_seq" OWNED BY public."Clients".id;
          public          postgres    false    216            �            1259    51888    Goods    TABLE     �  CREATE TABLE public."Goods" (
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
       public         heap    postgres    false            �            1259    51893    Goods_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Goods_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Goods_id_seq";
       public          postgres    false    217            �           0    0    Goods_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Goods_id_seq" OWNED BY public."Goods".id;
          public          postgres    false    218            �            1259    51894 	   materials    TABLE     �  CREATE TABLE public.materials (
    id integer NOT NULL,
    materialname text,
    code text,
    mass text,
    normgood text,
    normorder text,
    note text,
    pki text,
    account text,
    datepay text,
    supplier text,
    datearrival text,
    datevk text,
    dateotk text,
    sertificate text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "GoodId" bigint
);
    DROP TABLE public.materials;
       public         heap    postgres    false            �            1259    51899    materials_id_seq    SEQUENCE     �   CREATE SEQUENCE public.materials_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.materials_id_seq;
       public          postgres    false    219            �           0    0    materials_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.materials_id_seq OWNED BY public.materials.id;
          public          postgres    false    220            $           2604    51900 
   Clients id    DEFAULT     l   ALTER TABLE ONLY public."Clients" ALTER COLUMN id SET DEFAULT nextval('public."Clients_id_seq"'::regclass);
 ;   ALTER TABLE public."Clients" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            %           2604    51901    Goods id    DEFAULT     h   ALTER TABLE ONLY public."Goods" ALTER COLUMN id SET DEFAULT nextval('public."Goods_id_seq"'::regclass);
 9   ALTER TABLE public."Goods" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217            &           2604    51902    materials id    DEFAULT     l   ALTER TABLE ONLY public.materials ALTER COLUMN id SET DEFAULT nextval('public.materials_id_seq'::regclass);
 ;   ALTER TABLE public.materials ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219            �          0    51884    Clients 
   TABLE DATA           G   COPY public."Clients" (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   �       �          0    51888    Goods 
   TABLE DATA           �   COPY public."Goods" (id, productname, heattreatment, hydraulictesting, uzk, rgd, othersdocs, vik, technicalsolution, vsrnm, reportingpassport, control, "createdAt", "updatedAt", "ClientId") FROM stdin;
    public          postgres    false    217   �!       �          0    51894 	   materials 
   TABLE DATA           �   COPY public.materials (id, materialname, code, mass, normgood, normorder, note, pki, account, datepay, supplier, datearrival, datevk, dateotk, sertificate, "createdAt", "updatedAt", "GoodId") FROM stdin;
    public          postgres    false    219   �$       �           0    0    Clients_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Clients_id_seq"', 34, true);
          public          postgres    false    216            �           0    0    Goods_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Goods_id_seq"', 20, true);
          public          postgres    false    218            �           0    0    materials_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.materials_id_seq', 591, true);
          public          postgres    false    220            (           2606    51904    Clients Clients_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Clients"
    ADD CONSTRAINT "Clients_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Clients" DROP CONSTRAINT "Clients_pkey";
       public            postgres    false    215            *           2606    51906    Goods Goods_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Goods"
    ADD CONSTRAINT "Goods_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Goods" DROP CONSTRAINT "Goods_pkey";
       public            postgres    false    217            ,           2606    51908    materials materials_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.materials
    ADD CONSTRAINT materials_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.materials DROP CONSTRAINT materials_pkey;
       public            postgres    false    219            -           2606    51909    Goods Goods_ClientId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Goods"
    ADD CONSTRAINT "Goods_ClientId_fkey" FOREIGN KEY ("ClientId") REFERENCES public."Clients"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public."Goods" DROP CONSTRAINT "Goods_ClientId_fkey";
       public          postgres    false    215    217    4648            �   �  x�}��mAD�b�"�d��8��N�7�b��#q����2U�!Y��������}�~��z�u{���M��h}-�U乴%uygy)�D
���W1n��"��^nk&����Q�v�5�YlB��c;�����DԠ����­b�Q�v�vVyv�v'4���.pJ���h*�4l��H
��@4������,5���jD@$�Yd�>P+"���T�-j�R	�E~u�x�~'"���iX�r����`������l�~D���Ӵl��~��p��Eչ��Hp:F�_?���K@�83��X�\�<D��!y�n�dX���C,m�q,����Dzq5fj�XpX�Iq0tdVV؉�Hq24���\����'"���vsI�
{��ը������nd@���Ӱ�#Rx�Dzu;R|��1��Dvq<�d�K��y��C[ZXs��V��'D��jY��*0��'D�J�*�j�ER��9T�΢�V�&��1/Q�      �     x���[R�0���*��D���-����V�tR:��𒲃@.��[8�BW�#[�2u
6���?7`O
��S/p�k�^�ҽ�o���n�.�ѿ�{�pC_��pBo��gK\�������g���FY.D���C
���N�����v�P�BP��~"�}R_�
��rA�u�NIUs6+9��RQ�0��a��dT�Ơ�({T���uVwA���Mt�ҟ�#�K�S���W�Kz~!dqIp3���h�<�Bår�4��xu��]�r��?�%�xB.�8#P�H�0��O�1*���#[���_�L�t���.�d!�Tu�p�(^l(\�Y�I-KxL+$�2<i�����
#�-#(M�0�܈\��!�\�N��}�W�mg�a%t/2��@�a��NLR���M���&��i*Yny�줞471���jj R�$w
Z�p�{h" �@4����R�v�v�w}�g4z7�B*�')RG���(D02��;���������<Jd2}�:�T��Fg:m" ��3���l]��J�N6��]Zs��]B�#�������e�%H�vV6�G"Q��-�^������ǣ��Y��D���_��I�m���C�����	�����/��D�$l��S����j-��j�*��VM���:4p������
H��x~e��zĠ��'�~�}/q7X�����	`�g�����6�K��]WPI�����nܞ����Q��.0
EC96�k^U�/��      �      x��}َו�s�+� �to��C6�a��.�]U��?F��r5\�S�h�I&GS���*M�dZ�C�@�_�/�O�'Nĉ!3�"S̼73�>��6"�/�'���n*�1��2�R"ɑ�S&-����*��L�_��L%��y��Ə��J	9s2BH���g�?̟��a��xY	=R�}�~�I�7�3nϤ��oz��ad�?���O�gi��1�_)qbJ�����Z�Q^YI)@D���?�)  �2�0s�3�"�A�R������>*�a�`]p����l�*`�����a�.��5���`fB.�3�H�(Qm��O~?{������_�+E�C�D!|z<*�8n^�p�����s���)掙��T��E��������)�;��V��4���$a��=��4'��a���?>��wz��*16U�p��t 4K�;#bS�
g׵���FX3.��7AX���O����_�ߝ9��ȌЄq�3bH�!���ɭ�C�8�,�c���,��y�t�}y��Y�k�1�mT�j@%�o�]`�������a
׫V����\K�ni���{pi$\X�*��Z��oc��e�i�E�0�����hƄ�b�p��uK�2v��}�ҟS��F��9�M܉�eJ���_^揎��#��~���=�?�p� d	�P�n�B1���g�t�	���Ӱ7+0"�g��� <r@��8#��Q~v{~��OcB5���Ē] �U���|�Ѹ���Cw��W���כ���[o��ٛ���[5���9(�V?�?���=0w��P<J� ���(�$���+6	'�w�_�ޅ��s��,�WmJ�
.��X���w葳�fN3��L�(,��I�QΆX:/Q�/x[�F�e�"(��@e���c+�]��
Q�<�,�VE��$@TaɌ��db(�,sȯ�/b��s�>���V�^ZGN��\hX�*h�B�4�Ma-H�.f9���d�����n�4�B��I�k&����3�g'q8Iy��P�U���{�B��Mw��{�;z�aMDfs�,�q5��,v�hJ=R�R3��wë���l(1�3�F3�:�\g�qSI��6���7�7�1U�C�p�#��P�����_[v$�0�ڶ̲�d,��}D)��h�=�Џ�S�.���C-��נ�I�w�=B�S��)�֯���d~)��n�Aa��9��h��ȍH_�����{	0I�`���\/%gB��J`R���_2 �.���AO�>��[C�aj2���F	m��U�I3���hG��Tif�O��mfE,3ѕ�<n6:����}�&DeV%����o1P��[�}�Lh֡��`��xWf*S!G�5��bE�u:�Ot�cp��Sp�}�+���V�g�.db���3�#�j�d�rR�qa���<�����x0���T���<Pv`�#�?������}Ӓr��v���i"��V��_P�_R��v�����^�~�Wi�-���ק����%� O�)ް�����~z.��o�2p*z
���P�mm�}��������;����	�y|V;(�;�&���x;�ůd8�b0��:gV����&kPy��`�׮�m�< �1�A�Bo�O�\f4F ������Xj����Dh^�]��\b�Y���4 ���q#To�8��ߓ'���O�F��L���{.��ܣ�N_N:���ZΫ�^�i��[V�/�ye���3�.0�hR	�n71��el����F���
r4��(�������eJ��Z&�a�4{e�3������w��`��ɿ(���Gm"0k�0�ˌ��֣6��m�#�z��n5+|0+�O���BgB$FH���C�z>(q��=�V�%������eN��2���s��� �� �N���b�YūA�� R-J���{�_�����SL?}��E��B���^X��3�Ҏf"r��Y�?�%e=���4gZ7Y�j�sH���ڤ����8�fl���-�t0��6�Z��������I��5H�Q���6��~�n	��A_z�f(r �����=�
1j�lv5�4���FTEt��F�g�EV_�S��bqx���/��d�C����)[BQ8S���R�͈�o�Lp�
��l��	�Ǡ��o4�p<qj.��v$~xq��L������ ߪĥ����M����S��&s����C����LvW��T�W&He��+�C���8�8�T�I�m�0Z]�����:�"i�L3�k$�cL~��QW��)�T�́T<���0q����3�d^�v���`��_|0J%���
��=\6�m�d�A�5��2�}~����M�%��c+ռx�ѭ1M�W�7�j`�L��7�����[�U��)@y�����"O�c4�>���1u�~��s�1��~���d��8n�-<hFT��S�`��ɵ�Q���֚A�3�/������K�SYZG��V\-��W������W8�׽��iK8�s�W0�IqP��F���U��.�.���W��k��6tU"�d����漓7� ��҄�W�PP�nh�=�F`'iuP�&@g��������p���O���/q����䠊d�roÕ.���zs'�D-�Ȍ�@v������%j[_��'�q|/�S�Aw����9"vF�?-f�����D5G�UM�U�U��M�F&�0�ō��ȳ���W�Ya�[x4��B�^��~z��h�#����C�h�y�Jr�|�&�jN��|cKW�^���|���.	XWE�5���X�����g�%�nJ�cq[8emj����#�����G.��x`o�P<uz?*``�I�a>G��T��X���D�/��/a'3�^��|p��G
�D4��[�_����nkIDec�K	���4�5�d��%*ـ���p ���_`����=s��a�'<��9*�`��(�pZ��(�m-i~ ��ȭ�ew_�&�Ar�šdf���P���Lti}��4 ��1��v�&�˲w��+j�x7�Аp�p9j�������ᩨ�B6��,j���E��1�#�Ïc���8�|��IpE�x�.��+�4'B-���,Qi��v^\b��}�\�yyN��Jt^=Ԉ�qy|�rsrv�Ȭ��I�^�`�hMN�r�<��q�8,��O�O�ړ��f�PQ��1�۝�GU� �����)�^.�'���ZcN��g����7)��O�dO,Ӱ��8U5����^�M��
8�p�hR�a���C���N�p>3p(�6*�>�dKX�w����v�P$!�_+G����0�����/Q!l�����A��j�A�+jsX&,Xu���U��a���Q�3j2-�,5����E��c
ƔW��+�:Z�٪<Ug�fZ�*�}�իJr�.2ƅ�j�ԫ#3a@�`YI`/��=�o�'��A��_�����J�9+��I� ���Qʿ�m�uj��=�U�O��APR���,m%���G�9O���ÃX�{̗+N�_< >��v�`+�fLt��!�i��|���#[<�ɮ?��?��H�:�X�3 <�h�:`3{z~p>���Y�3�Α86ی�BՇr�5����~��L0�}�Y�R��شǐ�c�0'� �F���6�}��8�:5��/�_���+�+ŏF�`�أa����tb-�]_X��Wj�鶩=��K�]�g��RM)��-�`r�u����2!��f�8�w����u0a&/���xӢd�8�`�w�4��o�s�~Q�|b�J쫔e��7UM-�B�o��6�S{�ԧAN\���lT�k �ç�u��T�}1^�7�o�]`fqF�D	��z��,é��f�ޛ���ӭo�sƨ1)�ٴ	��1�Řu8N���Ͳ�*���h�b@v�-�l�k��H���pr�0�h�����0�Ba�+��G�i��h������ ZEf���!Y���`D\,��3*΄彯�v_���_[=��G5�[/�0K:�?���lg0�yi��`���3#�ު��!    [�:�3�9����H������ey��Uc��c���`>Pe��F��Y�򐱺Z��F�f�w����6Ϳġ(�F$x�E��TTe���e���`���n(�0�L�P`��L%���ҎLcѩ*� ��x*YYE�#��s mҫd�$�4a3���D��X���>6:x��J�cj�h���<!p�`�D\%G����ą)����fӝ2O���H.tfe�e�G�n斘��3 ���Y�|����fyf_���$Sm�`���t7.�a�~�DEb3�)��]��W�#�G7�s�`f������Ա�cåX�X�r�(�h��¶�s������tIL��;�5��o&�r���7Sl[�"c%ܺ쭴tȂih�I���@��y�*�RL4ҕ8�~Ԟ�l���[�Q���8�I�)Oܰ����@[�	=�܂ѱ#���o�j���7�1D:B�q�8�L�-�8�!R�/�'�65����/�A���l�-ۤ�.>.FƇ�*$�DЬ{��~v����Z��S���!�2p,`5L���	į��ߴ�5�� �?
�,�@�SM����uc�Q�`X�ls4�`����\ˎWw��,# �b�ۥ�����<ݮwz�]����(��a<9���p�:1L�L�vD�eT;�����-�JyQ�Y��8z�y�@ђ��<��TٓO[��&���%)mD4V�Oj}�Y��U�����Y8�by� ڿD�n&�,aM�l�o���F�0h���V��.��ݼa"���Me��ҙ�P���RY18�9ʃ9��[kU�4lg<J�۱�P Vr�S�b�E�q��@A���y�[��#�j��1��L=���͟d�d\|�d��X'00Y905�K,�Zk�g!�ݧ���(�s��_�#
�4�J١�����i�H�#�*Y��(+HG��sqC��m�k��e'�) ky�LO%�)Dӕ$_�`��&�����@�� �-�0@����B�l@DR��`�~t�GПK2�{�P{��^.$܂%�<�cɘ�q���3"q �ǈ�?O��|�qX/�*
Eٔ�4o3o���"���/xG�f|�6�sܵ���1�(�����vFq����{����⛩$N����]���L �Z�o���II}�c8Y%��A(v�B)*Z*��J�G�5H����=W�"�闎�q�~'[�d�J���%�"mH�����p�}&���m�l^�y�i��vg]���^y����k�V��G�	���l�\�\�.r��{k�m�h*$�G�F�EMw$\�h�
7[@����f!s�� �1�q������20F��rb��ф��v�H�-)+�=�Y�*)�={�qS>F�F�+���=����W�k=uL0�c#|#�I���1nΚ_�:�!z$�&�-\�XF��p!�"���9���i�9��{7����涫��7�oH���f��s����W��?��[>w?�]�e������O�^��9�]��\d�t�$����e^�M�U�N����L1���ȍ�iV�7�QW��bSۧrXI��R�Th����GJ4���X�aX��8�H#��3M%�[��2��̓t9�5�A4�q�)#��dZ�99��o�3�^o���4k؜'�:&q>��uc(���"4�P$�V�
�/as�d�]/L�\��/����e���"{�ڹ��Dd�k��Q��k�ˮ�vɜ��˚h� R,������A�R���@�i2Hz%��Lc��3{Q!�Htt���]�$K��|Fڥ���w��r��G��$+Ҫ�L���d�e'�Ϣ�G�M��+$Q�1ņq�wzn�"�L�|1��_�M22"�̈́A���{Є�S�h5r/��#c�Ӌ[�"��bc�ۓ|���`��R�=��,=�f��2�W��UT]U���t��Q���l�(<�T���(~�ƫ4O��A����Y6C�±�k�n�W�N�YJ���~l�,������Ηi5�nLk09�(�pë�v�^�0�܊��%�����4F��ܸ�YVT��Z�K U-Cz+��ti���Hؤ6�J��1�ݜ��Q'\�N-z;��l ���E��[UZ7�%���G`����H�X���
d� G���W`�,5�)����c,])�ͬh�d�2�w�X��ਉ�������i22#��$� �e�E�4q�}��w�G �.,�� ���`k'?�a��ڢRZ��l7��Ō��kƮ���h�7kI��yg��[IĔ���.p�Њf�bw#6u�T����Rp��7�|+�����R�3��Ԓ�2���a.[�@Xb�Τj��������#�̽��`K�1��c�S��<�ű�������2D�pi��R�ԟI}d�Lj�*�]��q):�g��J�)KA��D7��;�-�"�e�)���= M4���'�@+�g�'F��
�m��(��)��ᘨ~^�p �4H��
a%���LF���B@�G���K
��uaU���Q��5ؚ�[##�H"*0C�+�.��
v����`�7�I8���Ǳ4�˖'6r��\hq]�"��$=�v����5,D1��"D[Mb�3�[��1�=I}j�~v���W5� �g��_��z��k�!�'5��#7��M�F�{�֍+B8эKd����p�a�l3��q7�\�ە��<��PvIV�k<͸��R����p�H�Q�f���ތ�$"�������w�:s`�ܠ�[��Y�%	W�,ǽ��q�Ld�-��o+�e��%�@0�~��n��ܔI��S�4i�����UG���cz��hH�	X��U,����<׎��Wy�F��X�Y�����Bț"f�h�Y�x�r'1�p�1s;��=�`��5<��U����`hO�2�k�t�$�u��3�fF;�lp3�ݢ�f�ً�b��%}���_X���*HK��pg dd��(`�U��<�.�`���C�|��R�-<�ܪ}E��lf�U2�ze!����B��b�s�v�w��-�(\�g���o4:F�����!����K� ��WѴZ��� i=L��h�p�����X�ܲ�m��o)�3��a��a/s=h��{�R�S��)���k��+��̆]�ƙ��)Ĩ����:Y7לM�#�A&{��7@FuT �R1]K%�v� �si���ޑ�θ��xN��K(�ഝc�X�u}s��Vx�����`t��%����I� ��#3���)tp1ots�C=�/�47d�Y)�##6���]lcÙ��bp$�J�VTBEq�N�{�����`�L\�#�*�M�d��?b�y"lqa(�y{��k<�35�S{�Z��V/�_�)B��2A���].]W[*�ڤݣl� S�p*��\9�m��ƙe謍n��z:�^�d6�~�x�k�c��,��b���wp�;;~8�[�l+����;J���<�{A�;|筦��nZHl'cs�p�ϝ�(���n"G���u��?��&�-K��R%����>��x�]>	=p�nP�l����f7��JXL835��D���љ�|<[���sH|I]�lc���"22n* ��S��Qe>�I��{Y�8�b(�� Y��F;�c�
$��Z:�NM���LF���Gx����_��	��%�-3�pj�pF3�����Hm��bIe��xb���~b��xb�~|���詢�e�1���ʩ��Ƥ�w�	+���&�v��,�C੤���(����
��Q骾(C�������K�e3��@��V��{�c���!(r�GB�T��k��RE99چ�E(wQ�.�2�Jk�Ov�T�|�]���Q���t��?��� �X�JV�S�a��g0&C�|Rq0Q�"���ɐ� �u7.��V9�8L�(*����,��YT�"�Ht6@���.g��r!���,F�\CIՓK�1���="�_�D��*|B�'��L86���F�W �D�i�Aϫ}	R��0��D�!�fH��T!5e'�i�fO�����Q�%�7P���d)�1�;.�5jj    ��*��� "������|�F1|�:�1�f��r��OF���+����LЍ#����؊l�\>�fӝ6�ߋ�y�E�� �md2�!�ɵ]�<�En�|���3�����C�Fv���;u��+i�L^C1�)�H��`��M�	�_����yY��,�C
w�>H�b�����=p����f�T���&統��R��9"���A�X��i��n � �֧ͼ�#��|Fx��B�):��o靀���]�GFޠpU��r��(�(�jA9܀Q%�Q���4r�WD\&�����\��IL\�*
�T��mC�JeQq��O��$d]N=V���i\pS�d
��'s:`'�!OSk=Z�:Ü	P��О�����;��*o��7Eu��o֩%���sq��,�3x��.eōH3��q!D���5�*�7q�Q~R6os��0�T)#�Q��>wU����D���1�;�?�r�'��r��<cb���J�Rb��U����,W�2��\��ׇ�#X$Oܿ/���xa?u�>~��]���.O��JN/�b��j�7���l�4��C>�?��ż�y�����PS0�֭,�u٪��Da8C#��T���E���ȭ��,����y�J�K�V@�AH`H�rw��DZ�:
���D ��F�?�cr=�vB���U~?�lf�J�"��Pկ�uS�W���Z�wZ��m��(��@���]�$�i�B�	v3�[�JR2h����t��h���:˸�4�ԯK�[����ۺA9j�V���$���юI0׾yl,�[�0�b�r-%�H��=��׋:�.нe��"�k�H���Uje1a	2N�X[��^� 4�z	��h�q�_�U�P{����bQ���ݞ>�P��!�*wk3�7���t�"t}��Ev'�H�a���+��&ކ��hzG?WL7�8�&����5˄�>��⁃o"�	��%�E�Rg�dv���{�@�����WHo0q��'<���rP��7�z�1��`� �;��- |Z��U����GS�VKE3��tz˹ݼ�|��)�LF�k�Ԩp}f���cmI��A4�A5�&@�d�s�o�c�H���%�x���͊D��nV�$xH�Q��l^�J��HkkZM;��!3�m���	H�Dig�EV����+���v��Bf�Rғ�צ%��@%{%�D��	w-O�9�� &ƺ���G��S"��p/�-]�� �("cD����Y�l��f��Y�4��Bԗp:>I�]��<w���Ux�x���>r�rwo�"vx�L��/�:�#�G����$;���?Ø;U�Q��a�n�SA�����x$O'��gS,fϺ�H���v�f��G��*�T�Gs��_0�_R��W��1�Kj�#�e��p/�d,�Bƙ�be:y�����~H�j�:�%�s?U��rȀс�v�N��6L�Z!���eVΧ�R�-r<0�M��̍�T�ʜLCP��M����(0��[�F�/�;HBd���9�L���HTj���Bq�w�P�����(812,l9��ӿ�F����r�����^���z)h{F�REu��-O�	�&��*R4n}6ER�9�gܛe?n����ϑ�`��K�H���'{�xx�:0���Uϰ���+4L�O���<�a�0��r���A���S�
�9��>*�Y�y���?�EM���p!�s�T������RA��ul��]�ta�j&X�͡5�F�fll�(jh�2�@��<�Y)�Q�����#5?��s�l�aT��n�ͨpշ�%9�&vw�Rlj*+���3�#ãgַ*֭���/�QhV�X�C)Bm������'��#��ә���+ό��wT����˅�9,�D�5�AR�W��6O� w-�?�5ы�<��#�`0&��E��?���������g�h�g\�]-}ԃ��Ѵm����?K���M%e�Z9H��թ���h߂��K���]9��l_qH�NT��OO3�",D�/�K�3>����a볣��%��JG�I���*4��7�y;��N>"hIBG��G��(������@R3 ����λ��n��KuӉ�N�趘�lqM�<�}�l��)F�]��+/�+����rJ^������rD��+-�j5`�n�a˸B�cMI�����*K�d�]�������������+���WQ�)l�J�Ћ��f4nCX���;�	���.���k��P"�XW�k�FJ|C�)|�N�z0FP�E
�#�#)h$�Ro9���T 9�#�E߃ǥ��]��r�v<���fpZS�1�sd��8�cD��:��`n�.�,���!儆C.<S�3�zc1Cᡀ��H��
L3D��oݹBc�b`������H�` S=ö�ѳ��A�$W�>�,vJ&=%�@��E��i��iO�2�c ۄW2�709�{S���:b����/����H�x��CK;�ʨ�7Eo�y�?�z�_u�x��izP��3`��O��F��j�qU3*�i9��vAq��uQ<@���#��K��v��`���d�h|-Ʒ���d�'^��>�+�,L:��6ܘo�%IGp�a�_j6�?�l)?{�c���T�����G��AFm$Of&����.�1��d��QWe�%5gRfBP��헨 I��Z��l��A�V"�E���j>%��-�&�aP
�_��:y|y�s�ׅE�n�)��(���	f9���d�f�����y�֏�3�{q�yb�iThC%c�4u:���د@����G���������~)��+��~>�<ȱ";ń���U.[�D)ku�8��翦x�߁_�Q�狗#ZF�)�*��g�q'�<xl\�*
�
w�2p}�F5�+/�W�ˡIɏ�E�
V�6�s;"���k�U׮���	c���"'�s�2>a�VY[0*� Q�j��ruV�d�[BМ��%�a�����ʹ%�!�R�7z_�EBL�����j�������S@��l�� %g�C�2z:/Q	�������E���IV_ۣp,�E�&N��|��`�($"D{���cq�n�,��c5Et�Ҙ��>�^M�v6�rѨ�r��̓,��Y��c�D4�I��"ߧYo�PC
X���j�XP�Z�^Q�*J8A;.0��k��ӂ�-�� QX%�M�
�5���Vڰ{pF��W�#<�� ���-�	���`���;�(H2\�"X�-`0�Tg���lL�ov�G59P=�P�*{���N�x1B)ZY`t2�3X�k�p�Ed�0q�x��R�%ja���g���FN�z��fQ�r4�@bd�Y���"��<���F�a�:�*��q(��#{Ifxg�v�f�i�Z����$J�Om4����v���:�VM�'7��?,�*����u�R҃���t���*)=���CL��н�L-�Æ^���$׎x�L�0��Ŏ��k�*:�f#N�0S��B����i�^�/�W/cn�꤬�7��������]놛��IϦk�D�j93`f��r���#с�,+���fހQ��$���&�+x�Å�cIÅQ��n�MĒ�Lh��Y �S�0���n�s�Y��-��*��I;B(V�����bNZ�*#�n9��2�`��v�4�t�/V���t���N�[Ut�* Y.dK�㵁�%���%�va͵nh%Z�-�b��p۷�x `#��C$��4ؑF���c�\����[;��+ �E�;(H��BxO	1�k�0K�XX|�e�4����;�TI	���*pD�T�PL4Ԏ7E1��W�)�Nw.�H{�$�XǶު	���sLs�S�l�X��~y�)Jno��-o=��� ���Z��`M�-n=���GI�U��YV�&�1���DŐ��:7�T��C��r�`"3%	�ڮ��=��}Dc�Jt�'��R�o�쫺�u��b8B��H��Yl�_����^�7�X���Q6+��D"��۩�ʿM�\6؃ʵ�y���w
������E���LO�E~yz4���R.j�^��n�����DcVBca��Q�� �	  k�?J��G�K}/-yV�E�$��t�A�H�rgK��#X�,Q��\̦k���V�+��ީ�x�{9� -j�ux�i�5��$hY����;�l��Ϛ-Qo�Ox��î��ί�Ï�)3|�ʨ��`)�*��3̠�osd{��]S�]����;iš��IQ־����Q��,��+g��f觭��S#e��}�������ݟ37e����~9U�B�!��#��Z���H�	Tì��s;�v���[��VX�(��Lt�����d)��_d`�*x�X"=�b����xU�^mq��a�T���k���*�u��XUI��#�!�f(Ao`֨L��[;�A�խ Y 99���/(��/�7!�[]��~���Lʖ��z	�,���H�r 6ʁ��s�<I����QPI�]
|�[8	�>�FD����:���3����r5���'�F)�6\��b D �Bɉ�H0
�eeq��y����J�m�DMJD]؀� � ����p�}���j��GÃ��4MM�A��Ԯ���eG�YFs���e�I��:�8��(rH�G��;<�?N[�y4L��"8׭����s]9���h@��s�*\��a���rN�g~�3z�Ij���9�*Tk�ud/����~����Ò̄��\��v �Y�T�H�<�0���~�e|TJ�x���N�Ǟ�w'v:������`�8f���c��Y��}�
���O�]������)���H5����K�1�R7�A���q2aY\Mh&?�6Uΐ;���9Z�НꥣD�f�b�	�ٳ��*�T��E{c�9�JBAP�:ݮ��v�M���D����΀&�g[����լ�u�T��R��:�X�{g��y��`���:�m�d�1���G�=�9�D�=�6+ZxRa���Ռ5Rr"7|4O�M�:�Bn����c���qM"c$����1��I�UY$�p(f��U6aZ�w�;�b�կ����bsV�4PM��O�U);��7�~�cZ$ɰ7�6�
�Z����s�Z:44��5Ҡ�ۗ.�xn�Xra�(��VX�8�&�ׁ�=$���T�_����V�v�����9u�\b�+Mܩ�����ʵ�A~pfXU8F0�>���`|ďc%�FR�vT#�~��b�޾!�Ğ:'f\v��Ę`L	���@�>���7m����4�N�BFm��Sa}Vq"����|�j�m��D�Y��NwB�\����=
'��|�B�8�0��΂V�n]X�_��F�����-I	j���Ktfm��6� �}+��%�ZV5ӭ�<��#9Bh{3v��K��bھ��t��f��S�!�!��L���b+��Q���\ǜў��f���� �)\��wR��1� �A�u�+�Ѡ�����g-�p5�*~�5e�;,�2�@G�|��q��t�T�u�(��(A}D�r*$oª�}<C"q��b1����zV�*1)����ǈ�����y?"e� Gd.<6��ɘ?�)D���ԚY���tC"�6Xh��wS1�3�S�43�V8�+�D�*�j�h6�4K�V�#MfE��aQ��jA`]���ǯ����ۜ@�u�<x�N_�ϳ��:�����Lvn�tm��'`M37Z:�#�^
��Tff^#a��+�L���s��R�J����~���u�X����u��u��־�u�u�	��*a�~��q�D�����=� :�;��c@o��H����K0<��?o��#��6JV9��s`V_�L���tkwF�?#睎5�]�2����~�:�^�?�.���k4^8�^�6���ş��Y�'Y�1\�����c#�*屺�'��8`ģ�i��Mh��7	.��+sS�I��똱8���x��Mw�%0��P�QX�A;�����W�т���B]�4'x��S���-ŋl�'�Ay]��턑��il�+���Av�Пӟ����QF���G�s��4h
շX�h!��Z��͗w�ηIe���E�-��^���������շ�$D�B�{�۶[ړ��[�=܅GΏ��D�lܼ���q�������m�P2\�p��"Ejd���c��a���ֻD���ֻ��Fp��W�Ub�b?�xWe��<�+�Zt�ԇ�{�"E���������cE��!"IgVN"�/����������(�+�Dw�ऱ��c��xN�#oPw���g�dGHb	'�nUT&�7�a���/��z�j�J�f��3����[R��$�0xG-��Gn�T��1z� ��n~���ݶ�b�$	kI�6���<� V��U3d�1�[����N�
�d��߇��=t^1�*�:Ľ��u��J,��5=���ඐZ�sX*��

��lqh����[�5s����ӻ���JO��q?���õ�Ϯb@Ԓ[J�`�N�H�n��$3�`�L�.$�,�����6ǌ̏�G]�l������#� �(�IK�>Z�l�&<�=��5<u���D�h�����5�H$�o�_eo����A4��     