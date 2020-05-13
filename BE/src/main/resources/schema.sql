drop table if exists game_application;
drop table if exists basic_team;
drop table if exists basic_player;
drop table if exists matchs;
drop table if exists match_one_inning_info;
drop table if exists team;
drop table if exists team_one_inning_info;
drop table if exists team_one_inning_plate_info;
drop table if exists player;
drop table if exists player_one_plate_appearance_info;
drop table if exists player_one_plate_appearance_history;

create table game_application (
    id int primary key not null auto_increment,
    name varchar (100)
);

create table basic_team (
    id int primary key not null auto_increment,
    name varchar (100),
    logo_url varchar (500),
    game_application int references game_application(id),
    game_application_key int
);

create table basic_player (
    id int primary key not null auto_increment,
    name varchar (45),
    position varchar (45),
    batting_average varchar (45),
    orders varchar (45),
    basic_team int references basic_team(id),
    basic_team_key int
);

create table matchs (
    id int primary key not null auto_increment,
    current_inning varchar (45),
    location varchar (45),
    team_matching varchar (45),
    game_application int references game_application(id),
    game_application_key int
);

create table match_one_inning_info (
    id int primary key not null auto_increment,
    inning varchar (45),
    matchs int references matchs(id),
    matchs_key int
);

create table team (
    id int primary key not null auto_increment,
    name varchar (100),
    logo varchar (500),
    -- 1 대 1 관계인 user_email 컬럼
    user_email varchar (500),
    selected varchar (45),
    role varchar (45),
    total_score varchar (45),
    total_pa varchar (45),
    total_hit varchar (45),
    total_out varchar (45),
    current_order varchar (45),
    pitch_count varchar (45),
    matchs int references matchs(id),
    matchs_key int
);

create table team_one_inning_info (
    id int primary key not null auto_increment,
    inning varchar (45),
    out_count varchar (45),
    score varchar (45),
    team int references team(id),
    team_key int
);

create table team_one_inning_plate_info (
    id int primary key not null auto_increment,
    base_name varchar (45),
    player_id varchar (45),
    team_one_inning_info int references team_one_inning_info(id),
    team_one_inning_info_key int
);

create table player (
    id int primary key not null auto_increment,
    name varchar (45),
    position varchar (45),
    batting_average varchar (45),
    orders varchar (45),
    plate_appearance varchar (45),
    hit_count varchar (45),
    out_count varchar (45),
    game_average varchar (45),
    pitch_count varchar (45),
    team int references team(id),
    team_key int
);

create table player_one_plate_appearance_info (
    id int primary key not null auto_increment,
    strike_count varchar (45),
    ball_count varchar (45),
    player int references player(id),
    player_key int
);

create table player_one_plate_appearance_history (
    id int primary key not null auto_increment,
    history varchar (45),
    player_one_plate_appearance_info int references player_one_plate_appearance_info(id),
    player_one_plate_appearance_info_key int
);

