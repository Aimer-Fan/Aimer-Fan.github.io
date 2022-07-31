import{_ as a,o as e,c as l,e as t}from"./app.cbf35e07.js";const i={},L=t('<h1 id="sql-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#sql-\u6982\u8FF0" aria-hidden="true">#</a> SQL \u6982\u8FF0</h1><h2 id="sql\u80CC\u666F\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#sql\u80CC\u666F\u77E5\u8BC6" aria-hidden="true">#</a> SQL\u80CC\u666F\u77E5\u8BC6</h2><p>1974\u5E74\uFF0CIBM\u7814\u7A76\u5458\u53D1\u5E03\u4E86\u4E00\u7BC7\u63ED\u5F00\u6570\u636E\u5E93\u6280\u672F\u7684\u8BBA\u6587\u300ASEQUEL\uFF1A\u4E00\u95E8\u7ED3\u6784\u5316\u7684\u82F1\u8BED\u67E5\u8BE2\u8BED\u8A00\u300B\uFF0C\u76F4\u5230\u4ECA\u5929\u8FD9\u95E8\u7ED3\u6784\u5316\u8BED\u8A00\u5E76\u6CA1\u6709\u592A\u5927\u7684\u53D8\u5316\u3002\u76F8\u6BD4\u4E8E\u5176\u4ED6\u7684\u8BED\u8A00\uFF0CSQL\u7684\u534A\u8870\u671F\u53EF\u4EE5\u8BF4\u662F\u975E\u5E38\u957F\u4E86\u3002</p><p>\u65E0\u8BBA\u662F\u524D\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u8FD8\u662F\u540E\u7AEF\u5DE5\u7A0B\u5E08\uFF0C\u90FD\u4E00\u5B9A\u4F1A\u548C\u6570\u636E\u6253\u4EA4\u9053\uFF0C\u90FD\u9700\u8981\u4E86\u89E3\u5982\u4F55\u53C8\u5FEB\u53C8\u51C6\u786E\u7684\u63D0\u53D6\u81EA\u5DF1\u60F3\u8981\u7684\u6570\u636E\u3002\u66F4\u522B\u63D0\u6570\u636E\u5206\u6790\u5E08\u4E86\uFF0C\u4ED6\u4EEC\u7684\u5DE5\u4F5C\u5C31\u662F\u548C\u6570\u636E\u6253\u4EA4\u9053\uFF0C\u6574\u7406\u4E0D\u540C\u7684\u62A5\u544A\uFF0C\u4EE5\u4FBF\u6307\u5BFC\u4E1A\u52A1\u51B3\u7B56\u3002</p><p>SQL\uFF08Structured Query Language\uFF0C\u7ED3\u6784\u5316\u67E5\u8BE2\u8BED\u8A00\uFF09\u662F\u4F7F\u7528\u5173\u7CFB\u6A21\u578B\u7684\u6570\u636E\u5E94\u7528\u8BED\u8A00\uFF0C\u4E0E\u6570\u636E\u76F4\u63A5\u6253\u4EA4\u9053\uFF0C\u7531 IBM \u4E0A\u4E16\u7EAA70\u5E74\u4EE3\u5F00\u53D1\u51FA\u6765\uFF0C\u540E\u7531\u7F8E\u56FD\u56FD\u5BB6\u6807\u51C6\u5C40\uFF08ANSI\uFF09\u5F00\u59CB\u7740\u624B\u5236\u5B9A SQL \u6807\u51C6\uFF0C\u5148\u540E\u6709 SQL-86\u3001SQL-89\u3001SQL-92\u3001SQL-99 \u7B49\u6807\u51C6\u3002</p><p>SQL \u6709\u4E24\u4E2A\u91CD\u8981\u7684\u6807\u51C6\uFF0C\u5206\u522B\u662F SQL92 \u548C SQL99\uFF0C\u4ED6\u4EEC\u5206\u522B\u4EE3\u8868\u4E8692\u5E74\u548C99\u5E74\u9881\u5E03\u7684SQL\u6807\u51C6\uFF0C\u6211\u4EEC\u4ECA\u5929\u4F7F\u7528\u7684SQL\u8BED\u8A00\u4F9D\u7136\u9075\u5FAA\u8FD9\u4E9B\u6807\u51C6\u3002</p><p>\u4E0D\u540C\u7684\u6570\u636E\u5E93\u751F\u4EA7\u5382\u5546\u90FD\u652F\u6301SQL\u8BED\u53E5\uFF0C\u4F46\u90FD\u6709\u7279\u5B9A\u7684\u5185\u5BB9\u3002</p><h2 id="sql\u5206\u7C7B" tabindex="-1"><a class="header-anchor" href="#sql\u5206\u7C7B" aria-hidden="true">#</a> SQL\u5206\u7C7B</h2><p>SQL\u8BED\u8A00\u5728\u529F\u80FD\u4E0A\u4E3B\u8981\u5206\u4E3A\u5982\u4E0B3\u5927\u7C7B\uFF1A</p><ul><li>DDL\uFF08Data Definition Language\uFF0C\u6570\u636E\u5B9A\u4E49\u8BED\u8A00\uFF09\u8FD9\u4E9B\u8BED\u8A00\u5B9A\u4E49\u4E86\u4E0D\u540C\u7684\u6570\u636E\u5E93\uFF0C\u8868\u3001\u8BD5\u56FE\u3001\u7D22\u5F15\u7B49\u6570\u636E\u5E93\u5BF9\u8C61\uFF0C\u8FD8\u53EF\u4EE5\u7528\u6765\u521B\u5EFA\u3001\u5220\u9664\u3001\u4FEE\u6539\u6570\u636E\u5E93\u548C\u6570\u636E\u8868\u7684\u7ED3\u6784\u3002 <ul><li>\u4E3B\u8981\u7684\u8BED\u53E5\u5173\u952E\u5B57\u5305\u62EC\uFF1ACREATE\u3001DROP\u3001ALTER \u7B49\u3002</li></ul></li><li>DML\uFF08Data Manipulation Language\uFF0C\u6570\u636E\u64CD\u4F5C\u8BED\u8A00\uFF09\uFF0C\u7528\u4E8E\u6DFB\u52A0\u3001\u5220\u9664\u3001\u66F4\u65B0\u548C\u67E5\u8BE2\u6570\u636E\u5E93\u8BB0\u5F55\uFF0C\u5E76\u68C0\u67E5\u6570\u636E\u5B8C\u6574\u6027\u3002 <ul><li>\u4E3B\u8981\u7684\u8BED\u53E5\u5173\u952E\u5B57\u5305\u62EC\uFF1AINSET\u3001DELETE\u3001UPDATE\u3001SELECT \u7B49</li><li>SELECT\u662FSQL\u8BED\u8A00\u7684\u57FA\u7840\uFF0C\u6700\u4E3A\u91CD\u8981\u3002</li></ul></li><li>DCL\uFF08Data Control Language\uFF0C\u6570\u636E\u63A7\u5236\u8BED\u8A00\uFF09\u7528\u4E8E\u5B9A\u4E49\u6570\u636E\u5E93\u3001\u8868\u3001\u5B57\u6BB5\u3001\u7528\u6237\u7684\u8BBF\u95EE\u6743\u9650\u548C\u5B89\u5168\u7EA7\u522B\u3002 <ul><li>\u4E3B\u8981\u7684\u8BED\u53E5\u5173\u952E\u5B57\u5305\u62EC\uFF1AGRANT\u3001REVOKE\u3001COMMIT\u3001ROLLBACK\u3001SAVEPOINT \u7B49\u3002</li></ul></li></ul><blockquote><p>\u56E0\u4E3A\u67E5\u8BE2\u8BED\u53E5\u4F7F\u7528\u7684\u975E\u5E38\u9891\u7E41\u3002\u6240\u4EE5\u5F88\u591A\u4EBA\u5427\u67E5\u8BE2\u8BED\u53E5\u5355\u72EC\u62CE\u51FA\u6765\u4E00\u7C7B\uFF0CDQL\uFF08\u6570\u636E\u67E5\u8BE2\u8BED\u8A00\uFF09</p><p>\u8FD8\u6709\u5355\u72EC\u5C06 COMMIT\u3001ROLLBACK \u53D6\u51FA\u6765\u79F0\u4E4B\u4E3A TCL\uFF08Transaction Control Language\uFF0C\u4E8B\u52A1\u63A7\u5236\u8BED\u8A00\uFF09</p></blockquote>',11),r=[L];function n(o,c){return e(),l("div",null,r)}var u=a(i,[["render",n],["__file","01-abstract.html.vue"]]);export{u as default};
