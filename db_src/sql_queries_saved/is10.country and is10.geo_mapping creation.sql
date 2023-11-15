create table is10.geo_mapping (
	zipcode_id UUID primary key default uuid_generate_v4(),
	country_zipcode varchar not null unique,
	zipcode varchar not null,
	city varchar not null,
	state varchar not null,
	county varchar,
	region varchar,
	district varchar,
	country_id UUID references is10.country,
	create_date timestamptz not null default current_timestamp,
	last_modified_date timestamptz not null,
	constraint zipcode_must_be_greater_than_0_and_less_than_7_characters check (length(zipcode) < 7)
)

create table is10.country (
	country_id UUID primary key default uuid_generate_v4(),
	country_abbr varchar not null unique,
	country varchar not null unique,
	create_date timestamptz not null default current_timestamp,
	last_modified_date timestamptz not null
)


