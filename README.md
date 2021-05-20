# Resource Explorer

This is a small evaluation project that helps us determine the programming skills and style of applicants. It also serves as an example of what might await you at our company.

`Notice`: Although this is a front-end task, the actual work will consist of back-end implementation as well.

## Requirements

In order to get the source files, you'll need [Git](https://git.io/). Other then that, basically a new version of [Node](https://nodejs.org) and an up-to-date web browser.

## Installation

First get the source files by running

```bash
$ git clone https://git.geogebra.org/evaluation/resource-explorer
$ cd resource-explorer
```

then install the dependencies by running

```bash
$ npm i
```

The development server can be started by running

```bash
$ npm start
```

## Do the work

There are three main tasks to do in this evaluation:

1. A review of an existing feature
2. The implementation of a new one
3. A few theoretical questions

For the **first task** have a look at the already existing resource list (which should open automatically after starting the
server) and to the code behind it. Try to find problems in the current implementation and note them as part
of a review message with ideas for possible fixes. Alternatively, you can fix them in the code right away. You don't 
have to find all the little problems as, again, these tasks are more about **how** you work.

For the **second task** please implement a "details page" that shows information about a specific resource. This page should
be available at the `/details/{id}` route and should be based on the `GET /materials/{id}` method of the API. 
An example of this call is: [https://api.geogebra.org/v1.0/materials/p8r4x6zf?scope=extended&embed=tags,contributors](https://api.geogebra.org/v1.0/materials/p8r4x6zf?scope=extended&embed=tags,contributors), 
but please see our [API's documentation](https://groot.geogebra.org:555/?url=https://api.geogebra.org/v1.0/openapi) for details.
On the "details page" the same information should be visible as on the resource list (thumbnail, type, name of author and creation date), 
along with all the names of the contributors, the description and a simple listing of all the tags (which includes 
categories, tags and topics). How you arrange the page and how you present these values is up to you (and it doesn't really 
matter as long as the layout is clean and simple).

For the **third task** please answer the questions listed at the bottom of this document and write them in a text file called `answers.txt` in the projects root directory. We only need textual answers here, no coding is needed.

`Notice`: you may find in code the term _material_. It's the same thing as _resource_.

As a little help, the project is using the following technologies (keep their standards in mind):

- [React](https://reactjs.org)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Router](https://reactrouter.com/web)
- [Tachyons](http://tachyons.io/)

These tasks are not only to proof that you can write code that works but rather to see **how** you do it:

- how is your code organized
- if you use patterns properly
- if you take care of readability/maintainability
- etc.

## Commit your work

In order to commit your work, please create a patch and send the patch file by email to
the following address: jobs@geogebra.org

A patch file can be generated by Git:

```bash
$ git add .
$ git commit -m "Solution"
[master 22b65a9] Solution
 ...
$ git format-patch master^
0001-Solution.patch
```

These commands do the following:

1. `git add` adds all file changes to the git index.
2. `git commit` saves the changes to the local repository.
3. `git format-patch` creates a patch file for the latest commit (don't forget the `^`
   in the end!).

In this example the file `0001-Solution.patch` would be the file to attach to your
email.


## Theoretical Questions

**Question 1**: We want to introduce a new endpoint to the API to fetch the 
user entity of the author of a book (with the fields `id` and `name`). If
you consider the common best practices for designing RESTful APIs, how would the 
URL for this endpoint look like?

**Question 2**: If we want to introduce versioning for the API, how 
would the URLs of the calls change?
Please modify the URLs of the following endpoints to indicate that they are
from Version 1 of the API.  
```
GET /resources  
POST /resources/54
```

**Question 3**: We want our API to be highly performant and be able to handle
many requests per second and respond quickly even in peek times of high usage.
Please list some ideas and possible techniques for how to increase and guarantee 
a high performance of the API.

**Question 4**: We want to make the API publicly accessible, e.g. so that 
partners or other users can use it within their own websites or applications.
We want to be able to restrict the access to the API to certain users and be 
able to track usage statistics like who sent how many requests per day.
Please describe a possible solution for how we can achieve this goal.
