# Function

PostgreSQL functions, also known as Stored Procedures, allow you to carry out operations that would normally take several queries and round trips in a single function within the database

# Create functions

https://www.postgresqltutorial.com/postgresql-create-function/

CREATE FUNCTION defines a new function. 

CREATE OR REPLACE FUNCTION will either create a new function, or replace an existing definition.

```sql
CREATE [OR REPLACE] FUNCTION function_name (arguments) 
RETURNS return_datatype AS $variable_name$
   DECLARE
      declaration;
      [...]
   BEGIN
      < function_body >
      [...]
      RETURN { variable_name | value }
   END; LANGUAGE plpgsql;
```

```
CREATE OR REPLACE FUNCTION function_name (parameters-list)  
RETURNS return_type  
LANGUAGE plpgsql  
AS  
$$  
    DECLARE  
    --- variables  
    BEGIN  
        --- SQL statements (logic)  
    END  
$$  
```


Where,

* function-name specifies the name of the function.

* [OR REPLACE] option allows modifying an existing function.

* The function must contain a return statement.

* RETURN clause specifies that data type you are going to return from the function. The return_datatype can be a base, composite, or domain type, or can reference the type of a table column.

* function-body contains the executable part.

* The AS keyword is used for creating a standalone function.

* plpgsql is the name of the language that the function is implemented in. Here, we use this option for PostgreSQL, it Can be SQL, C, internal, or the name of a user-defined procedural language. For backward compatibility, the name can be enclosed by single quotes.

* Finally, place a block in the **dollar-quoted string constant**.
* `$tag$`
In this syntax, the tag is optional. It may contain zero or many characters.
https://www.postgresqltutorial.com/dollar-quoted-string-constants/
=> Always use quoted-dollar string constants in user-defined functions and stored procedures to make the code more readable.

---

### How to create a variable in the DECLARE statement ?

In PostgreSQL, a variable is a meaningful name for a memory location. A variable holds a value that can be changed through the block or function. **A variable is always associated with a particular data type**. Before using a variable, **you must declare it in the declaration section** of the PostgreSQL Block. The following illustrates the syntax of declaring a variable.

Syntax: 

`variable_name data_type [:= expression];`

---