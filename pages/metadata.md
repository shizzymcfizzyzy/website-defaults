title=Metadata
description=Default metadata for eyeo websites

# Metadata

Default metadata for eyeo websites

1. [Social metadata](#social)

## Social metadata { #social }

### Local properties

The following page properties can be set on a per page basis:

- `og_url`
- `og_type`
- `og_site_name`
- `og_title`
- `og_description`
- `og_image`
- `og_image_alt`
- `og_locale`
- `facebook_id`
- `twitter_site`
- `twitter_card`
- `twitter_image`
- `twitter_image_alt`
- `pinterest_id`

### Global properties

Additionally, the following properties can be set to be available for the
entire site.

#### Site Name

In a `locales/[locale]/site.json` file:

```
{
  "name": {
    "message": "eyeo",
    "description": "Website title"
  }
}
```

#### Social accounts

In `/settings.ini`:

```
[social]
facebook_id = 1234abcd
pinterest_id = 1234abcd
twitter = username
```
