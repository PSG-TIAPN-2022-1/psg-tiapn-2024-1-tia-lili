-- MySQL Script generated by MySQL Workbench
-- Tue Jun  4 18:01:50 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tia_lili
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `tia_lili` ;

-- -----------------------------------------------------
-- Schema tia_lili
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tia_lili` DEFAULT CHARACTER SET utf8 ;
USE `tia_lili` ;

-- -----------------------------------------------------
-- Table `tia_lili`.`Usuarios`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tia_lili`.`Usuarios` ;

CREATE TABLE IF NOT EXISTS `tia_lili`.`Usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `endereco` VARCHAR(150) NOT NULL,
  `telefone` VARCHAR(20) NOT NULL,
  `email` VARCHAR(75) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tia_lili`.`Clientes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tia_lili`.`Clientes` ;

CREATE TABLE IF NOT EXISTS `tia_lili`.`Clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `endereco` VARCHAR(150) NULL,
  `telefone` VARCHAR(20) NULL,
  `usuarios_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Clientes_Usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_Clientes_Usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `tia_lili`.`Usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tia_lili`.`Bebidas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tia_lili`.`Bebidas` ;

CREATE TABLE IF NOT EXISTS `tia_lili`.`Bebidas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `valor` DECIMAL NOT NULL,
  `disponivel` TINYINT NULL DEFAULT 1,
  `img` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tia_lili`.`tipo_carnes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tia_lili`.`tipo_carnes` ;

CREATE TABLE IF NOT EXISTS `tia_lili`.`tipo_carnes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `valor_p` DECIMAL NOT NULL,
  `valor_g` DECIMAL NOT NULL,
  `img` VARCHAR(100) NULL,
  `disponivel` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tia_lili`.`acompanhamentos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tia_lili`.`acompanhamentos` ;

CREATE TABLE IF NOT EXISTS `tia_lili`.`acompanhamentos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `disponivel` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tia_lili`.`marmitas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tia_lili`.`marmitas` ;

CREATE TABLE IF NOT EXISTS `tia_lili`.`marmitas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo_carnes_id1` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_marmita_tipo_carnes_idx` (`tipo_carnes_id1` ASC) VISIBLE,
  CONSTRAINT `fk_marmita_tipo_carnes`
    FOREIGN KEY (`tipo_carnes_id1`)
    REFERENCES `tia_lili`.`tipo_carnes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tia_lili`.`pedidos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tia_lili`.`pedidos` ;

CREATE TABLE IF NOT EXISTS `tia_lili`.`pedidos` (
   `id` INT NOT NULL AUTO_INCREMENT,
  `clientes_id` INT NOT NULL DEFAULT 1,
  `data` DATETIME NULL,
  `total` DECIMAL(2) NOT NULL DEFAULT 0,
  `status` VARCHAR(15) NOT NULL DEFAULT 'carrinho',
  `pagamento` VARCHAR(15) NOT NULL DEFAULT 'pix',
  `entrega` VARCHAR(15) NOT NULL DEFAULT 'entrega',
  `taxa_entrega` DECIMAL(2) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  INDEX `fk_pedidos_Clientes1_idx` (`clientes_id` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_Clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `mydb`.`Clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tia_lili`.`marmita_acompanhamentos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tia_lili`.`marmita_acompanhamentos` ;

CREATE TABLE IF NOT EXISTS `tia_lili`.`marmita_acompanhamentos` (
  `marmita_id1` INT NOT NULL,
  `acompanhamentos_id` INT NOT NULL,
  INDEX `fk_marmita_acompanhamentos_marmita1_idx` (`marmita_id1` ASC) VISIBLE,
  INDEX `fk_marmita_acompanhamentos_acompanhamentos1_idx` (`acompanhamentos_id` ASC) VISIBLE,
  PRIMARY KEY (`marmita_id1`, `acompanhamentos_id`),
  CONSTRAINT `fk_marmita_acompanhamentos_marmita1`
    FOREIGN KEY (`marmita_id1`)
    REFERENCES `tia_lili`.`marmitas` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_marmita_acompanhamentos_acompanhamentos1`
    FOREIGN KEY (`acompanhamentos_id`)
    REFERENCES `tia_lili`.`acompanhamentos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tia_lili`.`pedido_marmitas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tia_lili`.`pedido_marmitas` ;

CREATE TABLE IF NOT EXISTS `tia_lili`.`pedido_marmitas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pedidos_id` INT NOT NULL,
  `marmita_id` INT NOT NULL,
  INDEX `fk_pedido_marmitas_pedidos1_idx` (`pedidos_id` ASC) VISIBLE,
  INDEX `fk_pedido_marmitas_marmita1_idx` (`marmita_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_pedido_marmitas_pedidos1`
    FOREIGN KEY (`pedidos_id`)
    REFERENCES `tia_lili`.`pedidos` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_marmitas_marmita1`
    FOREIGN KEY (`marmita_id`)
    REFERENCES `tia_lili`.`marmitas` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tia_lili`.`pedido_bebidas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tia_lili`.`pedido_bebidas` ;

CREATE TABLE IF NOT EXISTS `tia_lili`.`pedido_bebidas` (
  `id` VARCHAR(45) NOT NULL AUTO_INCREMENT,
  `pedidos_id` INT NOT NULL,
  `Bebidas_id` INT NOT NULL,
  INDEX `fk_pedido_marmitas_pedidos1_idx` (`pedidos_id` ASC) VISIBLE,
  INDEX `fk_pedido_bebidas_Bebidas1_idx` (`Bebidas_id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_pedido_marmitas_pedidos10`
    FOREIGN KEY (`pedidos_id`)
    REFERENCES `tia_lili`.`pedidos` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_bebidas_Bebidas1`
    FOREIGN KEY (`Bebidas_id`)
    REFERENCES `tia_lili`.`Bebidas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tia_lili`.`Usuarios_adm`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tia_lili`.`Usuarios_adm` ;

CREATE TABLE IF NOT EXISTS `tia_lili`.`Usuarios_adm` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `cargo` VARCHAR(20) NOT NULL,
  `email` VARCHAR(75) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;