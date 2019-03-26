USE h10j8xfvpcvxtyv5;

CREATE TABLE happyhour (
    hh_id INT AUTO_INCREMENT NOT NULL,
    hh_name VARCHAR(255) NOT NULL,
    hh_address VARCHAR(255),
    hh_duration VARCHAR(100),
    hh_drinks TEXT,
    hh_food TEXT,
    PRIMARY KEY (hh_id)
);