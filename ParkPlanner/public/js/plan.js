// INDEX PAGE
// 	-Mary clicks the sign up button
// 	   this opens a modal where she can enter her name, username, and             password; with the click of a submit button, she is now a “user”           of our site; her data is posted to db and stored for user                  authentication later
//      she is now directed to the pick a park page

// On the pick a park page, each image (MK, HS, AK, EPCOT)  is a separate link  to a create plans page for that park (html routes in place)

// CREATE PLAN PAGE (work with MK for now, others as time permits)

// Pulled data from Attractions (time of least wait with posted wait time/ actual wait (if available), Currently, these are displayed in a card with an ”add to plan” button.

// Using the button idea, the items are sent via span to the rendered plan section first item on top, then following items after.

// Mary can save the plan after creating it with save button at the bottom

// If we use FullCalendar, Mary will see a rectangular shapes with each attraction name, time, and *posted/actual wait time (all pulled from db)

        // *for the wait times, we may use an if statement to determine the lowest wait time available for each specific time and attraction

    // These shapes are draggable, and Mary can place these in the order she determines to be best for her family / party.

// On click, the save button will post the fully packaged plan (ids will have to match db fields)(park name, attraction name, times, and wait times) to db 

// once posted, we can get that plans data and render it back to Mary


// SAVED PLAN PAGE
    // When Mary clicks the link to saved plans, she is directed to this page (html routes in place); 
    
    // This page displays all her plans she has saved for the various parks; the image, as well as the plan title, may remind her which park she has for that plan 

    // Mary has the option to edit the plan. This is a put  route for updating fields where . . .

    // Mary can also share her plans on various social media platforms


// There is an example routes (plan) page that shows some sample schedules for attractions, also displays pic associated with park and park title
    // MK: first, space mountain; second, seven dwarfs mine train; third, small world; fourth, Mickey philharmagic; EAT.  Then, Haunted Mansion; Thunder Mountain. PARADE. Next, Spash Mountain, and end with Pirates of Carribbean.
    // AK: first, Avatar, then Navi River Journey; Second, Killimanjaro Safaris; Third, It's Tough to be a Bug; EAT. Fourth, Dinosaur; Fifth, show: Finding Nemo; Sixth, Kali River Rapids.


