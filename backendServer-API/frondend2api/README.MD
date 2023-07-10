# MySQL Setting

```mysql
-- 1. create database
create database `db_scoutAsia` charset utf8 collate utf8_general_ci;

-- 2. create table
create table tb_article(
id int(11) not null auto_increment,
`title` varchar(255),
`publisher` varchar(255),
`date` timestamp null default null,
`summary` varchar(255),
primary key(id)
)engine=InnoDB default charset=utf8;

-- 3.Initialization data
insert into `tb_article`(`title`,`publisher`,`date`,`summary`) values(
'Taiwan legislator leads ferry trial to boost ties with Okinawa island',
'TheMainichi',
'2018-05-27',
'YILAN, Taiwan (Kyodo) -- Taiwan\'s Legislative Speaker You Si-kun led a ferry trial run Tuesday from the island\'s eastern county of Yilan to Japan\'s westernmost inhabited island of Yonaguni in a bid to boost tourism and ties between the two sides.'
);
insert into `tb_article`(`title`,`publisher`,`date`,`summary`) values(
'Stay at Fukushima until release is complete\' IAEA head, to local officials',
'TheNikkei',
'2018-05-17',
'International Atomic Energy Agency (IAEA) Secretary-General Grossi, who published a report on the safety of the release, also attended the meeting and stressed the person\'s willingness to listen to local concerns.'
);
insert into `tb_article`(`title`,`publisher`,`date`,`summary`) values(
'French services activity falls for first time since January as demand weakens - PMI',
'ReutersNews',
'2022-05-27',
'The French central bank had said last month the economy was on course to avoid a recession this year while inflation pressures eased, though growth would only gradually pick up in the coming two years.'
);
```

# BackEnd Setting

```bash
# Installing dependencies
npm install

# start serve
npm run start
```

