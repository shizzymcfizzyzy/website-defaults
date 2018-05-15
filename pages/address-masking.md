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

Base64 encode sensitive `href` addresses into `data-address` attributes.

#### Markdown (before processing)

```
[Private Email](#){: data-address="bWFpbHRvOnVzZXJuYW1lQGV4YW1wbGUuY29t" }
```

#### HTML (before processing)

```
<a data-address="bWFpbHRvOnVzZXJuYW1lQGV4YW1wbGUuY29t">Private Email</a>
```

#### Output (after processing)

```
<a href="mailto:username@example.com">Private Email</a>
```

## Example

<script src="/js/address-masking.js"></script>

<a data-address="bWFpbHRvOnVzZXJuYW1lQGV4YW1wbGUuY29t">Private Email</a>
