<?php

// __DIR__ is a *magic constant* with the directory path containing this file.
// This allows us to correctly require_once Model.php, no matter where this file is being required from.
require_once __DIR__ . '/Model.php';

class User extends Model
{
    /** Insert a new entry into the database */
    protected function insert()
    {
        // @TODO: Use prepared statements to ensure data security

        // @TODO: You will need to iterate through all the attributes to build the prepared query

        // @TODO: After the insert, add the id back to the attributes array
        //        so the object properly represents a DB record
        $insert = ('INSERT INTO users (username, password, email) VALUES (:username, :password, :email)');
        $stmt = self::$dbc->prepare($insert);
        $stmt->bindValue(':username', $this->attributes['username'], PDO::PARAM_STR);
        $stmt->bindValue(':password',  $this->attributes['password'],  PDO::PARAM_STR);
        $stmt->bindValue(':email', $this->attributes['email'], PDO::PARAM_STR);
        $stmt->execute();
        $this->attributes['id'] = self::$dbc->InsertId();
    }

    /** Update existing entry in the database */
    protected function update()
    {
        // @TODO: Use prepared statements to ensure data security

        // @TODO: You will need to iterate through all the attributes to build the prepared query
        $stmt = self::$dbc->prepare('UPDATE users SET username = :username, password = :password, email = :email WHERE id = :id');
        $stmt->bindValue(':username', $this->attributes['username'], PDO::PARAM_STR);
        $stmt->bindValue(':password',  $this->attributes['password'],  PDO::PARAM_STR);
        $stmt->bindValue(':email', $this->attributes['email'], PDO::PARAM_STR);
        $stmt->bindValue(':id', $this->attributes['id'], PDO::PARAM_STR);
        $stmt->execute();
    }

    /**
     * Find a single record in the DB based on its id
     *
     * @param int $id id of the user entry in the database
     *
     * @return User An instance of the User class with attributes array set to values from the database
     */
    public static function find($id)
    {
        // Get connection to the database
        self::dbConnect();
            $stmt = self::$dbc->prepare('SELECT * FROM users WHERE id = :id');
            $stmt->bindValue(':id', $id, PDO::PARAM_STR);
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            var_dump($result);
        // @TODO: Create select statement using prepared statements

        // @TODO: Store the result in a variable named $result

        // The following code will set the attributes on the calling object based on the result variable's contents 
        $instance = null;
        if ($result) {
            $instance = new static($result);
        }
        return $instance;
    }

    /**
     * Find all records in a table
     *
     * @return User[] Array of instances of the User class with attributes set to values from database
     */
    public static function all()
    {
        self::dbConnect();

        // @TODO: Learning from the find method, return all the matching records
                self::dbConnect();
        // @TODO: Learning from the find method, return all the matching records
        $allUsers = self::$dbc->prepare('SELECT * FROM ' . self::$table);
        $allUsers->execute();
        $result = $allUsers->fetchAll(PDO::FETCH_ASSOC);
        $instance = null;
        if ($result) {
            $instance = new static($result);
        }
        return $instance;
    }
    public static function delete()
    {
        self::dbConnect();
        $deleteUsers = self::$dbc->prepare('DELETE * FROM ' . self::$table . ' WHERE id = :id');
        $deleteUsers->bindValue(':id', $this->attributes['id'], PDO::PARAM_INT);
        $deleteUsers->execute();
    }

}

$model1 = new User();
$model1->Name = 'Joe';
$model1->email = 'joe@email.com';

var_dump($model1);
