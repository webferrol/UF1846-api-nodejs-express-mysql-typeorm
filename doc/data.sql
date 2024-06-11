CREATE DATABASE  IF NOT EXISTS `tendaBD` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `tendaBD`;



--
-- Table structure for table `provedores`
--

DROP TABLE IF EXISTS `provedores`;

CREATE TABLE `provedores` (
  `prv_id` smallint(6) NOT NULL DEFAULT '0',
  `prv_nome` varchar(60) NOT NULL DEFAULT '',
  PRIMARY KEY (`prv_id`)
);

--
-- Table structure for table `artigos`
--

DROP TABLE IF EXISTS `artigos`;


CREATE TABLE `artigos` (
  `art_codigo` char(8) NOT NULL,
  `art_nome` varchar(120) NOT NULL DEFAULT '',
  `art_peso` smallint(5) unsigned DEFAULT NULL,
  `art_color` char(20) DEFAULT NULL,
  `art_pc` decimal(8,2) DEFAULT NULL COMMENT 'prezo de compra do artigo',
  `art_pv` decimal(8,2) NOT NULL COMMENT 'prezo de venta do artigo',
  `art_provedor` smallint(6) DEFAULT NULL,
  `art_stock` smallint(5) unsigned DEFAULT NULL COMMENT 'número de unidades do artigo disponibles no almacén',
  `art_alta` date NOT NULL COMMENT 'data na que se deu de alta o artigo',
  `art_baixa` date DEFAULT NULL COMMENT 'data na que se deu de baixa o artigo',
  `art_ultima_actualizacion` date DEFAULT NULL COMMENT 'data da última vez en que se fixeron cambios nos dato do artigo',
  PRIMARY KEY (`art_codigo`),
  KEY `art_nome` (`art_nome`),
  KEY `art_provedor` (`art_provedor`),
  CONSTRAINT `fk_artigos_provedores` FOREIGN KEY (`art_provedor`) REFERENCES `provedores` (`prv_id`) ON UPDATE CASCADE
) COMMENT 'Listado de los artigos a la venta';

alter table provedores modify column `prv_id` smallint(6) auto_increment;
alter table provedores modify column prv_nome varchar(60) unique not null;
ALTER TABLE artigos DROP CONSTRAINT fk_artigos_provedores;
ALTER TABLE artigos ADD CONSTRAINT fk_artigos_provedores FOREIGN KEY (art_provedor) REFERENCES provedores (prv_id)
ON DELETE SET NULL ON UPDATE CASCADE;
