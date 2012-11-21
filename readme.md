# Readme

## Edit-in-place with jQuery

Inspired by [this](http://24ways.org/2005/edit-in-place-with-ajax]) 24 Ways article (which in turn was inspired by Flickr-style editing), this script allows you to have elements which are highlighted when you hover over them and transform into a text field when you click on them.

### Usage

1. Make sure you are including [jQuery](http://jquery.com) in your <head> tags.
2. Place the script EditInPlace.1.0.0.js wherever you keep your javascript files
3. Link it immediately before the ```</body>``` tag using:
```
<script src="path/to/js/folder/EditInPlace.1.0.0.js"></script>
```
4. Give any element (such as ```<p>```) you want to be editable a class of "editable" and make sure it has an ID

Note that the script does not save changes to a database, so it is reset when you refresh the page. To change this, open EditInPlace.1.0.0.js and edit the saveEdit() function to call the script or function you use to save data to the database (such as a PHP script).