create table is10.addresses (
	address_id UUID primary key default uuid_generate_v4(),
	building_number varchar not null,
	street_name varchar not null,
	apt_suite_no varchar,
	zipcode_id uuid references is10.geo_mapping not null,
	create_date timestamptz not null default current_timestamp,
	last_modified_date timestamptz not null,
	constraint unique_address unique(building_number, street_name, apt_suite_no, zipcode_id)
)