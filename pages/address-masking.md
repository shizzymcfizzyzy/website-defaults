title=Address Masking
description=Use address masking to avoid spam.

# Address masking

Use address masking to avoid spam.

## Usage

### Step 1: Include script on page

Include the following script at the bottom of a page:

```
<script src="/js/address-masking.js"></script>
```

### Step 2: Base64 encode addresses

Base64 encode sensitive `href` addresses into `data-mask` attributes.

#### Markdown (before processing)

```
[Private Email](#){: data-mask='{ "href": "bWFpbHRvOnVzZXJuYW1lQGV4YW1wbGUuY29t" }'

[Email](#){: data-mask='{ "href": "bWFpbHRvOnVzZXJuYW1lQGV4YW1wbGUuY29t", "textContent": "dXNlcm5hbWVAZXhhbXBsZS5jb20=" }'
```

Note that you are required to use single quotes `'` for the `data-mask` attribute and double quotes `"` for the keys and values in the object.

#### HTML (before processing)

```
<a data-mask='{ "href": "bWFpbHRvOnVzZXJuYW1lQGV4YW1wbGUuY29t" }'>Private Email</a>

<a data-mask='{ "href": "bWFpbHRvOnVzZXJuYW1lQGV4YW1wbGUuY29t", "textContent": "dXNlcm5hbWVAZXhhbXBsZS5jb20=" }'>Email</a>
```

#### Output (after processing)

```
<a href="mailto:username@example.com">Private Email</a>

<a href="mailto:username@example.com">username@example.com</a>
```

## Example

<script src="/js/address-masking.js"></script>

<a data-mask='{ "href": "bWFpbHRvOnVzZXJuYW1lQGV4YW1wbGUuY29t" }'>Private Email</a>

<a data-mask='{ "href": "bWFpbHRvOnVzZXJuYW1lQGV4YW1wbGUuY29t", "textContent": "dXNlcm5hbWVAZXhhbXBsZS5jb20=" }'>Email</a>
