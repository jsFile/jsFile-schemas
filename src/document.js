module.exports = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "array",
    "description": "A schema of jDoc document",
    "items": {
        "$ref": "#/definitions/items"
    },
    "definitions": {
        "items": {
            "type": "object",
            "properties": {
                "style": {
                    "allOf": [
                        {
                            "$ref": "#/definitions/itemProperties"
                        },
                        {
                            "patternProperties": {
                                "^(?!properties)[a-zA-Z]+$": {
                                    "type": [
                                        "string",
                                        "number",
                                        "object"
                                    ]
                                }
                            }
                        }
                    ]
                },
                "properties": {
                    "allOf": [
                        {
                            "$ref": "#/definitions/itemProperties"
                        },
                        {
                            "properties": {
                                "tagName": {
                                    "enum": [
                                        "A", "ABBR", "ADDRESS", "AREA", "ARTICLE", "ASIDE", "AUDIO", "B", "BASE", "BDI",
                                        "BDO", "BLOCKQUOTE", "BODY", "BR", "BUTTON", "CANVAS", "CAPTION", "CITE", "CODE",
                                        "COL", "COLGROUP", "DATA", "DATALIST", "DD", "DEL", "DETAILS", "DFN", "DIALOG",
                                        "DIV", "DL", "DT", "EM", "EMBED", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER",
                                        "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEAD", "HEADER", "HGROUP", "HR",
                                        "HTML", "I", "IFRAME", "IMG", "INPUT", "INS", "KBD", "KEYGEN", "LABEL", "LEGEND",
                                        "LI", "LINK", "MAIN", "MAP", "MARK", "MENU", "MENUITEM", "META", "METER", "NAV",
                                        "NOSCRIPT", "OBJECT", "OL", "OPTGROUP", "OPTION", "OUTPUT", "P", "PARAM", "PRE",
                                        "PROGRESS", "Q", "RB", "RP", "RT", "RTC", "RUBY", "S", "SAMP", "SCRIPT", "SECTION",
                                        "SELECT", "SMALL", "SOURCE", "SPAN", "STRONG", "STYLE", "SUB", "SUMMARY", "SUP",
                                        "TABLE", "TBODY", "TD", "TEMPLATE", "TEXTAREA", "TFOOT", "TH", "THEAD", "TIME",
                                        "TITLE", "TR", "TRACK", "U", "UL", "VAR", "VIDEO", "WBR"
                                    ]
                                }
                            },
                            "required": ["tagName"]
                        }
                    ]
                },
                "children": {
                    "description": "Children elements",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/items"
                    }
                }
            },
            "additionalProperties": false,
            "required": [
                "children",
                "style",
                "properties"
            ]
        },
        "itemProperties": {
            "properties": {},
            "patternProperties": {
                "^[a-z][a-zA-Z]+$": {
                    "type": [
                        "string",
                        "number",
                        "boolean",
                        "object"
                    ]
                },
                "^[a-zA-Z]*[Cc]olor$": {
                    "type": "string",
                    "pattern": "^#[0-9A-Z]{6}$"
                },
                "^(?!line)([a-zA-Z]*([Ww]idth|[Hh]eight|Spacing|fontSize|textIndent))|((margin|padding|offset)Top|Right|Left|Bottom?)$": {
                    "type": "object",
                    "properties": {
                        "value": {
                            "type": "number"
                        },
                        "unit": {
                            "type": "string",
                            "enum": ["pt", "%", "cm", "mm", "in", "pc", "px"]
                        }
                    },
                    "required": [
                        "value",
                        "unit"
                    ]
                }
            },
            "additionalProperties": false
        }
    }
};