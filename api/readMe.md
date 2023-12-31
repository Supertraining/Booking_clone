<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

*   [register][1]
    *   [Parameters][2]
*   [login][3]
    *   [Parameters][4]
*   [createHotel][5]
    *   [Parameters][6]
*   [updateHotel][7]
    *   [Parameters][8]
*   [deleteHotel][9]
    *   [Parameters][10]
*   [getHotel][11]
    *   [Parameters][12]
*   [getHotels][13]
    *   [Parameters][14]
*   [countByCity][15]
    *   [Parameters][16]
*   [countByType][17]
    *   [Parameters][18]
*   [getHotelRooms][19]
    *   [Parameters][20]

## register

Registers a new user.

### Parameters

*   `req` **[Object][21]** the request object
*   `res` **[Object][21]** the response object
*   `next` **[Function][22]** the next middleware function

Returns **[Promise][23]** resolves with a message indicating successful user creation

## login

Logs in a user.

### Parameters

*   `req` **[Object][21]** The request object.
*   `res` **[Object][21]** The response object.
*   `next` **[Function][22]** The next middleware function.

Returns **[Promise][23]** The promise that resolves to nothing.

## createHotel

Creates a new hotel based on the provided request body and saves it to the database.

### Parameters

*   `req` **[Object][21]** The request object containing the hotel details in the body.
*   `res` **[Object][21]** The response object used to send the saved hotel details back to the client.
*   `next` **[Function][22]** The next function in the middleware chain.

Returns **[Promise][23]** A promise that resolves to the saved hotel object.

## updateHotel

Updates a hotel in the database.

### Parameters

*   `req` **[Object][21]** The request object.
*   `res` **[Object][21]** The response object.
*   `next` **[Function][22]** The next middleware function.

Returns **[Promise][23]** A promise that resolves to the updated hotel object.

## deleteHotel

Deletes a hotel.

### Parameters

*   `req` **[Object][21]** The request object.
*   `res` **[Object][21]** The response object.
*   `next` **[Function][22]** The next middleware function.

Returns **[Promise][23]\<void>** A promise that resolves with no value.

## getHotel

Retrieves a hotel by its ID.

### Parameters

*   `req` **[object][21]** The request object.
*   `res` **[object][21]** The response object.
*   `next` **[function][22]** The next middleware function.

Returns **[Promise][23]** The retrieved hotel.

## getHotels

Retrieves a list of hotels based on the provided query parameters.

### Parameters

*   `req` **[Object][21]** The request object.
*   `res` **[Object][21]** The response object.
*   `next` **[Function][22]** The next middleware function.

Returns **[Promise][23]** A promise that resolves to the list of hotels.

## countByCity

Counts the number of hotels in each city specified in the request query.

### Parameters

*   `req` **[Object][21]** The request object.
*   `res` **[Object][21]** The response object.
*   `next` **[Function][22]** The next function.

Returns **[Promise][23]** A Promise that resolves to the list of hotel counts.

## countByType

Counts the number of documents in the Hotel collection by type and returns the counts as an array of objects.

### Parameters

*   `req` **[Object][21]** the request object
*   `res` **[Object][21]** the response object
*   `next` **[Function][22]** the next middleware function

Returns **[Array][24]** an array of objects containing the type and count of each type of document

## getHotelRooms

Retrieves the list of hotel rooms for a given hotel ID.

### Parameters

*   `req` **[Object][21]** The request object.
*   `res` **[Object][21]** The response object.
*   `next` **[Function][22]** The next middleware function.

Returns **[Promise][23]<[Array][24]<[Object][21]>>** The list of hotel rooms.

[1]: #register

[2]: #parameters

[3]: #login

[4]: #parameters-1

[5]: #createhotel

[6]: #parameters-2

[7]: #updatehotel

[8]: #parameters-3

[9]: #deletehotel

[10]: #parameters-4

[11]: #gethotel

[12]: #parameters-5

[13]: #gethotels

[14]: #parameters-6

[15]: #countbycity

[16]: #parameters-7

[17]: #countbytype

[18]: #parameters-8

[19]: #gethotelrooms

[20]: #parameters-9

[21]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[22]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[23]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise

[24]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
