drop table if exists game;
drop table if exists team;
drop table if exists score;
drop table if exists batter;
drop table if exists history;

create table game (
    id int primary key not null auto_increment,
    game_name varchar (100)
);

-- team과 pitcher는 1 : 1 관계
-- team table에 pitcher가 들어감.

create table team (
    id int primary key not null auto_increment,
    name varchar (100),
    image varchar (100),
    total_score varchar (45),
    inning_score varchar (45),
    out_count varchar (45),
    game int references game(id),
    game_key int,
    pitcher_name varchar (45),
    number_pitches varchar (45)
);

create table score (
    id int primary key not null auto_increment,
    inning varchar(45),
    attack varchar (45),
    value varchar (45),
    team int references team(id),
    team_key int
);

create table history (
    id int primary key not null auto_increment,
    history varchar (45),
    batter int references batter(id),
    batter_key int
);

-- batter와 plates는 1 : 1 관계.
-- plates가 batter 속으로 들어감.

create table batter (
    id int primary key not null auto_increment,
    plate_appearence varchar(45),
    hits varchar(45),
    outs varchar(45),
    name varchar(45),
    batting_average varchar(45),
    game_average varchar (45),
    orders varchar (45),
    strike_count int,
    ball_count int,
    base varchar (45),
    team int references team(id),
    team_key int
);
