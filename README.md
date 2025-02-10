# Express.js Server Hang on Long Requests

This repository demonstrates a common issue in Express.js applications where the server hangs or crashes when processing requests that take an extended period.  The problem arises from a lack of proper timeout mechanisms, leading to unresponsive servers.

## Problem

The `server.js` file contains an Express.js server that handles a simple GET request.  However, if the request processing takes significantly long (simulated here by a delay), the server becomes unresponsive. This behavior stems from the request blocking the event loop, preventing other requests from being processed.

## Solution

The `server-fixed.js` file addresses the issue by implementing request timeouts using `setTimeout`.  The solution sets a timeout, and if the request takes longer, an error response is sent, preventing the server from hanging. This ensures the server remains responsive even with long-running operations.