import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCell extends Struct.ComponentSchema {
  collectionName: 'components_shared_cells';
  info: {
    displayName: 'cell';
    icon: 'apps';
  };
  attributes: {
    cell: Schema.Attribute.String;
  };
}

export interface SharedCompareTable extends Struct.ComponentSchema {
  collectionName: 'components_shared_compare_tables';
  info: {
    displayName: 'Compare Table';
  };
  attributes: {
    description: Schema.Attribute.Text;
    TableColumns: Schema.Attribute.Component<'shared.table-columns', true>;
    TableRows: Schema.Attribute.Component<'shared.table-row', true>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['compare']> &
      Schema.Attribute.DefaultTo<'compare'>;
  };
}

export interface SharedContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_contents';
  info: {
    displayName: 'Content';
    icon: 'apps';
  };
  attributes: {};
}

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    displayName: 'List Item';
    icon: 'bulletList';
  };
  attributes: {
    point: Schema.Attribute.Text;
  };
}

export interface SharedParagraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['paragraph']> &
      Schema.Attribute.DefaultTo<'paragraph'>;
  };
}

export interface SharedPlainList extends Struct.ComponentSchema {
  collectionName: 'components_shared_plain_lists';
  info: {
    displayName: 'Plain List';
    icon: 'attachment';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    points: Schema.Attribute.Component<'shared.list-item', true>;
    unOrdered: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface SharedTable extends Struct.ComponentSchema {
  collectionName: 'components_shared_tables';
  info: {
    displayName: 'Table';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    TableColumns: Schema.Attribute.Component<'shared.table-columns', true>;
    TableRow: Schema.Attribute.Component<'shared.table-row', true>;
    Title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['table']> &
      Schema.Attribute.DefaultTo<'table'>;
  };
}

export interface SharedTableColumns extends Struct.ComponentSchema {
  collectionName: 'components_shared_table_columns';
  info: {
    displayName: 'TableColumns';
    icon: 'apps';
  };
  attributes: {
    cell: Schema.Attribute.String;
  };
}

export interface SharedTableRow extends Struct.ComponentSchema {
  collectionName: 'components_shared_table_rows';
  info: {
    displayName: 'TableRow';
    icon: 'dashboard';
  };
  attributes: {
    cell: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.cell': SharedCell;
      'shared.compare-table': SharedCompareTable;
      'shared.content': SharedContent;
      'shared.list-item': SharedListItem;
      'shared.paragraph': SharedParagraph;
      'shared.plain-list': SharedPlainList;
      'shared.table': SharedTable;
      'shared.table-columns': SharedTableColumns;
      'shared.table-row': SharedTableRow;
    }
  }
}
