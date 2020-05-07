drop table if exists baseball;
drop table if exists team;
drop table if exists score;
drop table if exists player;
drop table if exists ballcount;

create table baseball (
    id int primary key not null auto_increment
);

create table team (
    id int primary key not null auto_increment,
    name varchar (100),
    baseball int references baseball(id),
    baseball_key int
);

create table score (
    id int primary key not null auto_increment,
    score varchar(45),
    team int references team(id),
    team_key int
);

create table player (
    id int primary key not null auto_increment,
    plate_appearence varchar(45),
    hit varchar(45),
    out varchar(45),
    name varchar(45),
    batting_average varchar(45),
    team int references team(id),
    team_key int
);

create table ballcount (
    id int primary key not null auto_increment,
    name varchar(45),
    player int references player(id),
    player_key int
);