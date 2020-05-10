drop table if exists gameApplication;
drop table if exists matchs;
drop table if exists matchOneInningInfo;
drop table if exists team;
drop table if exists teamOneMatchInfo;
drop table if exists teamOneInningInfo;
drop table if exists teamOneInningPlateInfo;
drop table if exists player;
drop table if exists playerOneMatchInfo;
drop table if exists playerOnePlateAppearanceInfo;
drop table if exists playerOnePlateAppearanceHistory;

create table gameApplication (
    id int primary key not null auto_increment,
    name varchar (100)
);

create table matchs (
    id int primary key not null auto_increment
);

create table matchOneInningInfo (
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
    matchs int references matchs(id),
    matchs_key int
);

create table teamOneMatchInfo (
    id int primary key not null auto_increment,
    role varchar (45),
    total_score varchar (45),
    total_pa varchar (45),
    total_hit varchar (45),
    total_out varchar (45),
    current_order varchar (45),
    team int references team(id),
    team_key int
);

create table teamOneInningInfo (
    id int primary key not null auto_increment,
    inning varchar (45),
    out_count varchar (45),
    score varchar (45),
    teamOneMatchInfo int references teamOneMatchInfo(id),
    teamOneMatchInfo_key int
);

create table teamOneInningPlateInfo (
    id int primary key not null auto_increment,
    base_name varchar (45),
    player_id varchar (45),
    teamOneInningInfo int references teamOneInningInfo(id),
    teamOneInningInfo_key int
);

create table player (
    id int primary key not null auto_increment,
    name varchar (45),
    position varchar (45),
    batting_average varchar (45),
    orders varchar (45),
    team int references team(id),
    team_key int
);

create table playerOneMatchInfo (
    id int primary key not null auto_increment,
    plate_appearance varchar (45),
    hit_count varchar (45),
    out_count varchar (45),
    game_average varchar (45),
    pitch_count varchar (45),
    player int references player(id),
    player_key int
);

create table playerOnePlateAppearanceInfo (
    id int primary key not null auto_increment,
    strike_count varchar (45),
    ball_count varchar (45),
    playerOneMatchInfo int references playerOneMatchInfo(id),
    playerOneMatchInfo_key int
);

create table playerOnePlateAppearanceHistory (
    id int primary key not null auto_increment,
    history varchar (45),
    playerOnePlateAppearanceInfo int references playerOnePlateAppearanceInfo(id),
    playerOnePlateAppearanceInfo_key int
);

