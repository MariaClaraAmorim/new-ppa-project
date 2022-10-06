create schema sistema_almoxarifado;
use sistema_almoxarifado;

 create table area_depar(
 id_area integer auto_increment primary key,
 nome_Dep varchar (40)
 );
CREATE TABLE servidor ( 
 id_servidor integer auto_increment primary key,
 nome varchar(40),  
 tel varchar (11),  
 tipo integer,  
 email varchar (80),  
id_area integer not null,
foreign key (id_area)  references area_depar (id_area)); 

CREATE TABLE requisicao( 
 status varchar(10),  
 id_req integer auto_increment primary key, 
 dataReq date,  
 id_servidor integer not null,
 foreign key (id_servidor) references servidor (id_servidor)
); 


CREATE TABLE modelo ( 
 id_modelo integer auto_increment primary key,  
 descricao varchar(30)); 

CREATE TABLE marca( 
 descricao  integer,  
 id_marca integer auto_increment primary key); 
 
 CREATE TABLE valorProduto ( 
 id_valor integer auto_increment primary key,
 lote integer,  
 valorLote float); 

CREATE TABLE tipoProduto 
(  id_tipo integer auto_increment primary key,  
 descricao varchar (30)); 

create table produto( id_prod INT PRIMARY KEY,  
 quantDisp integer,  
 nome varchar(30),  
 id_marca integer not null,  
 id_modelo integer not null,  
 id_valor integer not null,
 id_tipo integer not null,
 
foreign key  (id_marca ) references Marca(id_marca ),
 foreign key  (id_modelo) references Modelo (id_modelo),
 foreign key  (id_valor) references ValorProduto(id_valor),
  foreign key  ( id_tipo) references TipoProduto( id_tipo)
); 
CREATE TABLE itemreq ( 
 quantsol integer not null,  
 id_req integer not null,  
 id_prod integer not null, 
 foreign key (id_req) references Requisicao (id_req),
 foreign key (id_Prod) references Produto( id_prod)
); 

CREATE TABLE nf
( 
 id_nf integer auto_increment primary key,
 num_serie integer,  
 fornecedor varchar(25),  
 CNPJ integer  
); 
 
CREATE TABLE entrada ( 
 qtd integer,  
 id_entrada integer auto_increment primary key,
 id_Prod integer not null,  
 id_nf integer not null,
 foreign key (id_nf) references NF(id_nf),
 foreign key (id_prod) references Produto (id_prod)
 ); 
 
 alter table servidor add column id_chefia integer ;
 alter table servidor add constraint foreign key (id_chefia) references Servidor (id_servidor);

create table usuarios(
    id_user integer auto_increment primary key,
    nome VARCHAR(140),
    email VARCHAR(140) not null,
    senha VARCHAR(16)
);
