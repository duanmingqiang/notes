import{_ as n,c as a,o as s,b as t}from"./app.40d2e1a4.js";const g='{"title":"12. node","description":"","frontmatter":{},"headers":[{"level":2,"title":"12. node","slug":"_12-node"},{"level":3,"title":"11.1 node stream \u53BB\u53D6\u4E00\u4E2A\u8D85\u5927\u6570\u636E\u91CF\u7684\u65E5\u5FD7\uFF0C\u7531\u4E8E\u5185\u5B58\u9650\u5236\u6BCF\u6B21\u53EA\u80FD\u53D6\u4E00\u90E8\u5206\uFF0C\u73B0\u5728\u5E0C\u671B\u5728\u5168\u90E8\u65E5\u5FD7\u4E2D\u968F\u673A\u53D6\u4E00\u4E07\u6761\uFF0C\u5982\u4F55\u505A","slug":"_11-1-node-stream-\u53BB\u53D6\u4E00\u4E2A\u8D85\u5927\u6570\u636E\u91CF\u7684\u65E5\u5FD7\uFF0C\u7531\u4E8E\u5185\u5B58\u9650\u5236\u6BCF\u6B21\u53EA\u80FD\u53D6\u4E00\u90E8\u5206\uFF0C\u73B0\u5728\u5E0C\u671B\u5728\u5168\u90E8\u65E5\u5FD7\u4E2D\u968F\u673A\u53D6\u4E00\u4E07\u6761\uFF0C\u5982\u4F55\u505A"},{"level":2,"title":"13. \u9879\u76EE","slug":"_13-\u9879\u76EE"},{"level":3,"title":"12.1 \u4EAE\u70B9","slug":"_12-1-\u4EAE\u70B9"},{"level":3,"title":"12.2 \u96BE\u70B9","slug":"_12-2-\u96BE\u70B9"},{"level":3,"title":"1. \u81EA\u6211\u4ECB\u7ECD\u4E00\u4E0B\u4F60\u6BD4\u8F83\u5F97\u610F\u7684\u9879\u76EE\uFF0C\u4F60\u505A\u4E86\u54EA\u4E9B\u4E8B\uFF0C\u7ED3\u679C\u600E\u6837","slug":"_1-\u81EA\u6211\u4ECB\u7ECD\u4E00\u4E0B\u4F60\u6BD4\u8F83\u5F97\u610F\u7684\u9879\u76EE\uFF0C\u4F60\u505A\u4E86\u54EA\u4E9B\u4E8B\uFF0C\u7ED3\u679C\u600E\u6837"},{"level":3,"title":"12.2 \u91CC\u9762\u7528\u5230\u4E86\u54EA\u4E9B\u6280\u672F\uFF1F","slug":"_12-2-\u91CC\u9762\u7528\u5230\u4E86\u54EA\u4E9B\u6280\u672F\uFF1F"},{"level":3,"title":"12.1 \u4ECB\u7ECD\u4E00\u4E0B\u4E4B\u524D\u505A\u7684\u9879\u76EE","slug":"_12-1-\u4ECB\u7ECD\u4E00\u4E0B\u4E4B\u524D\u505A\u7684\u9879\u76EE"},{"level":3,"title":"12.1 \u4ECB\u7ECD\u4E00\u4E9B\u4E0A\u4E00\u4EFD\u5DE5\u4F5C\u4E3B\u8981\u90FD\u8D1F\u8D23\u54EA\u4E9B\u4E8B\u60C5","slug":"_12-1-\u4ECB\u7ECD\u4E00\u4E9B\u4E0A\u4E00\u4EFD\u5DE5\u4F5C\u4E3B\u8981\u90FD\u8D1F\u8D23\u54EA\u4E9B\u4E8B\u60C5"},{"level":3,"title":"1-6. \u4F60\u5BF9\u8FD9\u79CD\u4F4E\u4EE3\u7801\u5E73\u53F0\u600E\u4E48\u770B\uFF0C\u53D1\u5C55\u600E\u4E48\u6837\uFF1F\u770B\u597D\u5417\uFF1F\u6210\u719F\u5417\uFF1F","slug":"_1-6-\u4F60\u5BF9\u8FD9\u79CD\u4F4E\u4EE3\u7801\u5E73\u53F0\u600E\u4E48\u770B\uFF0C\u53D1\u5C55\u600E\u4E48\u6837\uFF1F\u770B\u597D\u5417\uFF1F\u6210\u719F\u5417\uFF1F"},{"level":3,"title":"12.1 \u4ECB\u7ECD\u4E00\u4E0B\u9879\u76EE \u6709\u54EA\u4E9B\u662F\u7531\u4F60\u4E3B\u5BFC\u63D0\u51FA\u7684\u65B9\u6848\u505A\u7684\u4E8B\u60C5","slug":"_12-1-\u4ECB\u7ECD\u4E00\u4E0B\u9879\u76EE-\u6709\u54EA\u4E9B\u662F\u7531\u4F60\u4E3B\u5BFC\u63D0\u51FA\u7684\u65B9\u6848\u505A\u7684\u4E8B\u60C5"},{"level":3,"title":"12.2 \u6280\u672F\u9009\u578B\u548C\u6280\u672F\u67B6\u6784\u90FD\u662F\u600E\u6837\u7684","slug":"_12-2-\u6280\u672F\u9009\u578B\u548C\u6280\u672F\u67B6\u6784\u90FD\u662F\u600E\u6837\u7684"},{"level":3,"title":"12.2 \u804A\u4E00\u4E0B\u6700\u590D\u6742\u7684\u9879\u76EE","slug":"_12-2-\u804A\u4E00\u4E0B\u6700\u590D\u6742\u7684\u9879\u76EE"},{"level":3,"title":"12.3 \u4E1A\u52A1\u5185\u7684\u516C\u5171\u5DE5\u5177\u63D0\u70BC\u4E86\u54EA\u4E9B","slug":"_12-3-\u4E1A\u52A1\u5185\u7684\u516C\u5171\u5DE5\u5177\u63D0\u70BC\u4E86\u54EA\u4E9B"},{"level":3,"title":"12.4 \u7ECD\u4E00\u4E2A\u6709\u6311\u6218\u6027\u7684\u9879\u76EE","slug":"_12-4-\u7ECD\u4E00\u4E2A\u6709\u6311\u6218\u6027\u7684\u9879\u76EE"},{"level":3,"title":"12.4 \u8FD9\u6B21\u627E\u5DE5\u4F5C\u4E3B\u8981\u770B\u91CD\u4EC0\u4E48","slug":"_12-4-\u8FD9\u6B21\u627E\u5DE5\u4F5C\u4E3B\u8981\u770B\u91CD\u4EC0\u4E48"},{"level":3,"title":"12.5 \u4F60\u5BF9serverless\u7684\u7406\u89E3\u662F\u4EC0\u4E48\u6837\u7684","slug":"_12-5-\u4F60\u5BF9serverless\u7684\u7406\u89E3\u662F\u4EC0\u4E48\u6837\u7684"},{"level":3,"title":"12.6 Devops","slug":"_12-6-devops"},{"level":3,"title":"12.7 Docker \u548C k8s \u6709\u76F8\u5173\u7ECF\u9A8C\u4E48","slug":"_12-7-docker-\u548C-k8s-\u6709\u76F8\u5173\u7ECF\u9A8C\u4E48"},{"level":3,"title":"12.6 \u672A\u6765\u53D1\u5C55\u65B9\u5411\u5E0C\u671B\u662F\u600E\u6837\u7684","slug":"_12-6-\u672A\u6765\u53D1\u5C55\u65B9\u5411\u5E0C\u671B\u662F\u600E\u6837\u7684"},{"level":3,"title":"12.7 \u5BF9\u6280\u672F\u4E0A\u6709\u4EC0\u4E48\u671F\u671B","slug":"_12-7-\u5BF9\u6280\u672F\u4E0A\u6709\u4EC0\u4E48\u671F\u671B"},{"level":3,"title":"12.8 \u4E4B\u524D\u7684\u5DE5\u4F5C\u5728\u6BCF\u4E2A\u9636\u6BB5\u7ED9\u4F60\u5E26\u6765\u4E86\u54EA\u4E9B\u6210\u957F","slug":"_12-8-\u4E4B\u524D\u7684\u5DE5\u4F5C\u5728\u6BCF\u4E2A\u9636\u6BB5\u7ED9\u4F60\u5E26\u6765\u4E86\u54EA\u4E9B\u6210\u957F"},{"level":3,"title":"12.9 TDD","slug":"_12-9-tdd"},{"level":3,"title":"12.11 \u524D\u7AEF\u76D1\u63A7\u62A5\u8B66\u662F\u600E\u4E48\u505A\u7684\uFF0C\u90FD\u6709\u54EA\u4E9B\u76D1\u63A7\u6307\u6807\uFF0C\u62A5\u8B66\u7684\u7B56\u7565\u662F\u600E\u6837\u7684\uFF0C\u5173\u6CE8\u54EA\u4E9B\u6307\u6807\u548C\u7EF4\u5EA6\uFF0C\u767D\u5C4F\u5982\u4F55\u76D1\u63A7","slug":"_12-11-\u524D\u7AEF\u76D1\u63A7\u62A5\u8B66\u662F\u600E\u4E48\u505A\u7684\uFF0C\u90FD\u6709\u54EA\u4E9B\u76D1\u63A7\u6307\u6807\uFF0C\u62A5\u8B66\u7684\u7B56\u7565\u662F\u600E\u6837\u7684\uFF0C\u5173\u6CE8\u54EA\u4E9B\u6307\u6807\u548C\u7EF4\u5EA6\uFF0C\u767D\u5C4F\u5982\u4F55\u76D1\u63A7"},{"level":3,"title":"12.12 \u5982\u679C\u6709\u4E00\u4E2A\u7528\u6237\u767D\u5C4F\u548B\u6574\uFF1F\uFF08\u8BA8\u8BBA\u9898\uFF09\u3010\u5FC5\u80CC\u3011","slug":"_12-12-\u5982\u679C\u6709\u4E00\u4E2A\u7528\u6237\u767D\u5C4F\u548B\u6574\uFF1F\uFF08\u8BA8\u8BBA\u9898\uFF09\u3010\u5FC5\u80CC\u3011"},{"level":3,"title":"12.12 \u7528\u4E09\u4E2A\u6B63\u9762\u7684\u8BCD\u548C\u4E09\u4E2A\u8D1F\u9762\u7684\u8BCD\u8BC4\u8BBA\u4E00\u4E0B\u4F60\u81EA\u5DF1","slug":"_12-12-\u7528\u4E09\u4E2A\u6B63\u9762\u7684\u8BCD\u548C\u4E09\u4E2A\u8D1F\u9762\u7684\u8BCD\u8BC4\u8BBA\u4E00\u4E0B\u4F60\u81EA\u5DF1"},{"level":3,"title":"12.13 \u6709\u6CA1\u6709\u505A\u8FC7\u54EA\u4E9B\u548C\u4EE3\u7801\u6CA1\u5173\u7CFB\u7684\u4F46\u662F\u6BD4\u8F83\u7CBE\u901A\u7684\u4E8B\u60C5","slug":"_12-13-\u6709\u6CA1\u6709\u505A\u8FC7\u54EA\u4E9B\u548C\u4EE3\u7801\u6CA1\u5173\u7CFB\u7684\u4F46\u662F\u6BD4\u8F83\u7CBE\u901A\u7684\u4E8B\u60C5"},{"level":3,"title":"12.14 \u4F60\u5BF9\u4E0B\u4E00\u4EFD\u5DE5\u4F5C\u7684\u671F\u671B\u662F\u600E\u6837\u7684","slug":"_12-14-\u4F60\u5BF9\u4E0B\u4E00\u4EFD\u5DE5\u4F5C\u7684\u671F\u671B\u662F\u600E\u6837\u7684"},{"level":3,"title":"12.15 \u4F60\u5BF9\u8FD9\u4E2A\u89C4\u5212\u505A\u8FC7\u54EA\u4E9B\u52AA\u529B","slug":"_12-15-\u4F60\u5BF9\u8FD9\u4E2A\u89C4\u5212\u505A\u8FC7\u54EA\u4E9B\u52AA\u529B"},{"level":3,"title":"12.15 \u4ECB\u7ECD\u4E00\u4E0B\u4F60\u6700\u8FD1\u8BFB\u8FC7\u7684\u4E00\u672C\u4E66","slug":"_12-15-\u4ECB\u7ECD\u4E00\u4E0B\u4F60\u6700\u8FD1\u8BFB\u8FC7\u7684\u4E00\u672C\u4E66"},{"level":3,"title":"12.16 \u6700\u8FD1\u6709\u5728\u5B66\u4EC0\u4E48\u65B0\u7684\u4E1C\u897F\u4E48","slug":"_12-16-\u6700\u8FD1\u6709\u5728\u5B66\u4EC0\u4E48\u65B0\u7684\u4E1C\u897F\u4E48"},{"level":3,"title":"12.17 \u4E4B\u524D\u7684\u5DE5\u4F5C\u4E2D\u6709\u6CA1\u6709\u4F60\u6BD4\u8F83\u6B23\u8D4F\u6216\u8005\u5D07\u62DC\u7684\u5DE5\u7A0B\u5E08","slug":"_12-17-\u4E4B\u524D\u7684\u5DE5\u4F5C\u4E2D\u6709\u6CA1\u6709\u4F60\u6BD4\u8F83\u6B23\u8D4F\u6216\u8005\u5D07\u62DC\u7684\u5DE5\u7A0B\u5E08"},{"level":3,"title":"12.16 \u4E4B\u524D\u7684\u56E2\u961F\u89C4\u6A21\u662F\u600E\u6837\u7684","slug":"_12-16-\u4E4B\u524D\u7684\u56E2\u961F\u89C4\u6A21\u662F\u600E\u6837\u7684"},{"level":3,"title":"12.17\u5BA2\u6237\u7AEF\u63D0\u4F9B API \u7248\u672C\u4E0D\u4E00\u81F4\u8FD9\u7C7B\u517C\u5BB9\u6027\u95EE\u9898\u4F60\u662F\u5982\u4F55\u505A\u7684\u5904\u7406","slug":"_12-17\u5BA2\u6237\u7AEF\u63D0\u4F9B-api-\u7248\u672C\u4E0D\u4E00\u81F4\u8FD9\u7C7B\u517C\u5BB9\u6027\u95EE\u9898\u4F60\u662F\u5982\u4F55\u505A\u7684\u5904\u7406"},{"level":3,"title":"12.18 \u56FD\u9645\u5316\u65B9\u6848\u662F\u5982\u4F55\u505A\u7684","slug":"_12-18-\u56FD\u9645\u5316\u65B9\u6848\u662F\u5982\u4F55\u505A\u7684"},{"level":3,"title":"12.19 \u811A\u624B\u67B6\u7528\u7684\u662F\u4EC0\u4E48\uFF0C\u6709\u81EA\u5DF1\u505A\u8FC7\u811A\u624B\u67B6\u4E48\uFF0CVite\u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF0C\u5982\u4F55\u533A\u5206\u73AF\u5883","slug":"_12-19-\u811A\u624B\u67B6\u7528\u7684\u662F\u4EC0\u4E48\uFF0C\u6709\u81EA\u5DF1\u505A\u8FC7\u811A\u624B\u67B6\u4E48\uFF0Cvite\u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF0C\u5982\u4F55\u533A\u5206\u73AF\u5883"},{"level":3,"title":"12.4. \u5370\u8C61\u6700\u6DF1\u523B\u7684bug\uFF1F","slug":"_12-4-\u5370\u8C61\u6700\u6DF1\u523B\u7684bug\uFF1F"},{"level":3,"title":"2.\u5370\u8C61\u6700\u6DF1\u523B\u7684\u9879\u76EE\uFF1F","slug":"_2-\u5370\u8C61\u6700\u6DF1\u523B\u7684\u9879\u76EE\uFF1F"},{"level":3,"title":"3.\u56DE\u9996\u8FC7\u53BB\uFF0C\u90A3\u4E9B\u4E8B\u60C5\u53EF\u4EE5\u505A\u5F97\u66F4\u597D\uFF1F","slug":"_3-\u56DE\u9996\u8FC7\u53BB\uFF0C\u90A3\u4E9B\u4E8B\u60C5\u53EF\u4EE5\u505A\u5F97\u66F4\u597D\uFF1F"},{"level":2,"title":"14. git/\u5DE5\u7A0B\u5316","slug":"_14-git-\u5DE5\u7A0B\u5316"},{"level":3,"title":"13.1 git commit\u7684\u6709\u9650\u5236\u4E48","slug":"_13-1-git-commit\u7684\u6709\u9650\u5236\u4E48"},{"level":3,"title":"13.1 \u66F4\u65B0","slug":"_13-1-\u66F4\u65B0"},{"level":3,"title":"13.2 \u67E5\u770B","slug":"_13-2-\u67E5\u770B"},{"level":3,"title":"13.3 \u63D0\u4EA4","slug":"_13-3-\u63D0\u4EA4"},{"level":3,"title":"13.3 CI/CD \u4E0A\u505A\u8FC7\u54EA\u4E9B","slug":"_13-3-ci-cd-\u4E0A\u505A\u8FC7\u54EA\u4E9B"},{"level":3,"title":"13.4 \u81EA\u52A8\u5316\u95EE\u7B54","slug":"_13-4-\u81EA\u52A8\u5316\u95EE\u7B54"},{"level":3,"title":"13.6 \u9879\u76EE\u4EE3\u7801\u89C4\u8303\u662F\u5982\u4F55\u505A\u7684\uFF0C\u5982\u4F55\u907F\u514D\u6709\u4EBA\u672C\u5730\u8DF3\u8FC7\u4EE3\u7801\u89C4\u8303","slug":"_13-6-\u9879\u76EE\u4EE3\u7801\u89C4\u8303\u662F\u5982\u4F55\u505A\u7684\uFF0C\u5982\u4F55\u907F\u514D\u6709\u4EBA\u672C\u5730\u8DF3\u8FC7\u4EE3\u7801\u89C4\u8303"},{"level":3,"title":"13.5 \u6709\u6CA1\u6709\u505A\u8FC7\u7ED9\u56E2\u961F\u5F00\u53D1\u63D0\u6548\u7684\u6280\u672F\u65B9\u6848","slug":"_13-5-\u6709\u6CA1\u6709\u505A\u8FC7\u7ED9\u56E2\u961F\u5F00\u53D1\u63D0\u6548\u7684\u6280\u672F\u65B9\u6848"},{"level":3,"title":"13.1 \u4F60\u5199\u8FC7\u4EC0\u4E48\u63D2\u4EF6","slug":"_13-1-\u4F60\u5199\u8FC7\u4EC0\u4E48\u63D2\u4EF6"},{"level":3,"title":"13.4\u80FD\u591F\u63A5\u53D7\u4EC0\u4E48\u6280\u672F\u6808","slug":"_13-4\u80FD\u591F\u63A5\u53D7\u4EC0\u4E48\u6280\u672F\u6808"},{"level":3,"title":"13.2 \u6A21\u5757\u8054\u90A6\u5B9E\u73B0","slug":"_13-2-\u6A21\u5757\u8054\u90A6\u5B9E\u73B0"},{"level":2,"title":"15 . \u8BBE\u8BA1\u6A21\u5F0F","slug":"_15-\u8BBE\u8BA1\u6A21\u5F0F"},{"level":3,"title":"14.1 \u5728\u5DE5\u4F5C\u4E2D\u6709\u7528\u5230\u4EC0\u4E48\u8BBE\u8BA1\u6A21\u5F0F\u4E48","slug":"_14-1-\u5728\u5DE5\u4F5C\u4E2D\u6709\u7528\u5230\u4EC0\u4E48\u8BBE\u8BA1\u6A21\u5F0F\u4E48"},{"level":3,"title":"14.1 \u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F","slug":"_14-1-\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F"},{"level":3,"title":"14.2 \u4ECB\u7ECD\u4E00\u4E0B\u5355\u4F8B\u6A21\u5F0F\u548C\u5B83\u5728\u524D\u7AEF\u7684\u5E94\u7528","slug":"_14-2-\u4ECB\u7ECD\u4E00\u4E0B\u5355\u4F8B\u6A21\u5F0F\u548C\u5B83\u5728\u524D\u7AEF\u7684\u5E94\u7528"},{"level":2,"title":"16. node","slug":"_16-node"},{"level":3,"title":"16.1 Node \u67B6\u6784\u662F\u600E\u6837\u7684\uFF1F","slug":"_16-1-node-\u67B6\u6784\u662F\u600E\u6837\u7684\uFF1F"},{"level":3,"title":"16.1 \u5B9E\u73B0\u4E00\u4E2A node \u5F02\u6B65\u51FD\u6570\u7684 promisify","slug":"_16-1-\u5B9E\u73B0\u4E00\u4E2A-node-\u5F02\u6B65\u51FD\u6570\u7684-promisify"},{"level":3,"title":"16.2 \u4E4B\u524D\u505A\u8FC7 SSR \u662F\u54EA\u79CD\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u662F\u540C\u6784\u4E48\uFF0C\u5728\u9879\u76EE\u4E2D\u5982\u4F55\u5E94\u7528","slug":"_16-2-\u4E4B\u524D\u505A\u8FC7-ssr-\u662F\u54EA\u79CD\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u662F\u540C\u6784\u4E48\uFF0C\u5728\u9879\u76EE\u4E2D\u5982\u4F55\u5E94\u7528"},{"level":3,"title":"16.3 node \u7684\u6846\u67B6\u7528\u7684\u662F\u54EA\u4E2A\uFF0C\u5185\u5B58\u76D1\u63A7\u662F\u600E\u4E48\u505A\u7684\uFF0C\u4F60\u4E86\u89E3\u8FC7\u54EA\u4E9B node \u7684\u6846\u67B6","slug":"_16-3-node-\u7684\u6846\u67B6\u7528\u7684\u662F\u54EA\u4E2A\uFF0C\u5185\u5B58\u76D1\u63A7\u662F\u600E\u4E48\u505A\u7684\uFF0C\u4F60\u4E86\u89E3\u8FC7\u54EA\u4E9B-node-\u7684\u6846\u67B6"},{"level":3,"title":"16.4 node \u8BFB\u53D6\u6587\u4EF6\u7684\u65F6\u5019\uFF0Cfs.readFile \u548C stream \u6709\u4EC0\u4E48\u533A\u522B","slug":"_16-4-node-\u8BFB\u53D6\u6587\u4EF6\u7684\u65F6\u5019\uFF0Cfs-readfile-\u548C-stream-\u6709\u4EC0\u4E48\u533A\u522B"},{"level":3,"title":"16.6 \u5B9E\u73B0\u4E00\u4E0B koa \u4E2D\u95F4\u4EF6\u539F\u7406\uFF0C\u5982\u4F55\u5224\u65AD\u8C03\u7528\u4E86\u591A\u6B21 next \u5E76\u629B\u51FA\u9519\u8BEF","slug":"_16-6-\u5B9E\u73B0\u4E00\u4E0B-koa-\u4E2D\u95F4\u4EF6\u539F\u7406\uFF0C\u5982\u4F55\u5224\u65AD\u8C03\u7528\u4E86\u591A\u6B21-next-\u5E76\u629B\u51FA\u9519\u8BEF"},{"level":3,"title":"16.5 node \u7684\u8FDB\u7A0B\u7BA1\u7406\u4E86\u89E3\u8FC7\u4E48\uFF1F\u591A\u8FDB\u7A0B\u90FD\u6709\u54EA\u4E9B\u65B9\u6848\uFF1F","slug":"_16-5-node-\u7684\u8FDB\u7A0B\u7BA1\u7406\u4E86\u89E3\u8FC7\u4E48\uFF1F\u591A\u8FDB\u7A0B\u90FD\u6709\u54EA\u4E9B\u65B9\u6848\uFF1F"},{"level":3,"title":"16.7  node\u505A\u8FC7\u54EA\u4E9B\u6027\u80FD\u4F18\u5316","slug":"_16-7-node\u505A\u8FC7\u54EA\u4E9B\u6027\u80FD\u4F18\u5316"},{"level":2,"title":"17. \u4E1A\u52A1/\u89C4\u8303","slug":"_17-\u4E1A\u52A1-\u89C4\u8303"},{"level":3,"title":"4.\u5355\u5143\u6D4B\u8BD5\u5982\u4F55\u6D4B\u8BD5","slug":"_4-\u5355\u5143\u6D4B\u8BD5\u5982\u4F55\u6D4B\u8BD5"},{"level":3,"title":"4.\u7528\u8FC7PWA\u5417\uFF1F","slug":"_4-\u7528\u8FC7pwa\u5417\uFF1F"},{"level":3,"title":"17.1 \u7EC4\u4EF6\u6E32\u67D3\u7684\u9519\u8BEF\u76D1\u542C","slug":"_17-1-\u7EC4\u4EF6\u6E32\u67D3\u7684\u9519\u8BEF\u76D1\u542C"},{"level":3,"title":"17.1 \u5BF9\u4E00\u4E2A\u516C\u5171\u7EC4\u4EF6\u6216\u8005\u5DE5\u5177\u505A\u6253\u5305\uFF0C\u4E00\u822C\u90FD\u9700\u8981\u4EA7\u51FA\u54EA\u4E9B\u8303\u5F0F\u7684\u6587\u4EF6","slug":"_17-1-\u5BF9\u4E00\u4E2A\u516C\u5171\u7EC4\u4EF6\u6216\u8005\u5DE5\u5177\u505A\u6253\u5305\uFF0C\u4E00\u822C\u90FD\u9700\u8981\u4EA7\u51FA\u54EA\u4E9B\u8303\u5F0F\u7684\u6587\u4EF6"},{"level":3,"title":"17.1 \u9875\u9762\u95F4\u540C\u6B65\u72B6\u6001\u4E00\u822C\u90FD\u6709\u54EA\u4E9B\u65B9\u6848\uFF0C\u5206\u522B\u7684\u5E94\u7528\u573A\u666F\u90FD\u662F\u54EA\u4E9B","slug":"_17-1-\u9875\u9762\u95F4\u540C\u6B65\u72B6\u6001\u4E00\u822C\u90FD\u6709\u54EA\u4E9B\u65B9\u6848\uFF0C\u5206\u522B\u7684\u5E94\u7528\u573A\u666F\u90FD\u662F\u54EA\u4E9B"},{"level":3,"title":"17.2 \u7EC4\u4EF6\u5E93\u4F60\u4EEC\u662F\u5982\u4F55\u505A\u7684\uFF0C\u4F60\u5728\u91CC\u9762\u662F\u4EC0\u4E48\u89D2\u8272\uFF0C\u7EC4\u4EF6\u4E0E\u7EC4\u4EF6\u4E4B\u95F4\u7684\u8C03\u7528\u5173\u7CFB\u5982\u4F55\u5904\u7406","slug":"_17-2-\u7EC4\u4EF6\u5E93\u4F60\u4EEC\u662F\u5982\u4F55\u505A\u7684\uFF0C\u4F60\u5728\u91CC\u9762\u662F\u4EC0\u4E48\u89D2\u8272\uFF0C\u7EC4\u4EF6\u4E0E\u7EC4\u4EF6\u4E4B\u95F4\u7684\u8C03\u7528\u5173\u7CFB\u5982\u4F55\u5904\u7406"},{"level":3,"title":"17.3 \u6709\u7528\u5230\u654F\u6377\u5F00\u53D1\u4E48\uFF0C\u5BF9\u4EE3\u7801\u8D28\u91CF\u4FDD\u969C\u6548\u679C\u5982\u4F55","slug":"_17-3-\u6709\u7528\u5230\u654F\u6377\u5F00\u53D1\u4E48\uFF0C\u5BF9\u4EE3\u7801\u8D28\u91CF\u4FDD\u969C\u6548\u679C\u5982\u4F55"},{"level":3,"title":"17.4 \u63D0\u5347\u5F00\u53D1\u6548\u7387\u4F60\u4EEC\u6709\u505A\u8FC7\u4EC0\u4E48\u4E48","slug":"_17-4-\u63D0\u5347\u5F00\u53D1\u6548\u7387\u4F60\u4EEC\u6709\u505A\u8FC7\u4EC0\u4E48\u4E48"},{"level":3,"title":"17.5 \u8BF7\u5199\u4E00\u4E2A\u62BD\u5956\u7A0B\u5E8F \uFF0C\u5DF2\u6709\u53C2\u4E0E\u62BD\u5956\u7684\u5458\u5DE5\u5DE5\u53F7\u7EC4\u6210\u7684\u6570\u7EC4 staffIds\u3002","slug":"_17-5-\u8BF7\u5199\u4E00\u4E2A\u62BD\u5956\u7A0B\u5E8F-\uFF0C\u5DF2\u6709\u53C2\u4E0E\u62BD\u5956\u7684\u5458\u5DE5\u5DE5\u53F7\u7EC4\u6210\u7684\u6570\u7EC4-staffids\u3002"},{"level":3,"title":"17.6 \u524D\u540E\u7AEF\u67B6\u6784\u662F\u600E\u6837\u7684\uFF0CB\u7AEF\u90FD\u505A\u8FC7\u54EA\u4E9B\u5185\u5BB9\uFF0C\u67B6\u6784\u662F\u600E\u6837\u7684","slug":"_17-6-\u524D\u540E\u7AEF\u67B6\u6784\u662F\u600E\u6837\u7684\uFF0Cb\u7AEF\u90FD\u505A\u8FC7\u54EA\u4E9B\u5185\u5BB9\uFF0C\u67B6\u6784\u662F\u600E\u6837\u7684"},{"level":3,"title":"17.7 \u5BF9\u7EBF\u4E0A\u5404\u7C7B\u5F02\u5E38\u5982\u4F55\u5904\u7406\uFF0C\u5BF9\u7EBF\u4E0A\u7684\u9759\u6001\u8D44\u6E90\u52A0\u8F7D\u5931\u8D25\u5982\u4F55\u6355\u83B7","slug":"_17-7-\u5BF9\u7EBF\u4E0A\u5404\u7C7B\u5F02\u5E38\u5982\u4F55\u5904\u7406\uFF0C\u5BF9\u7EBF\u4E0A\u7684\u9759\u6001\u8D44\u6E90\u52A0\u8F7D\u5931\u8D25\u5982\u4F55\u6355\u83B7"},{"level":3,"title":"17.8 \u5982\u4F55\u754C\u5B9A\u4E00\u4E2A\u4F9D\u8D56\u5305\u7684\u5B89\u5168\u6027","slug":"_17-8-\u5982\u4F55\u754C\u5B9A\u4E00\u4E2A\u4F9D\u8D56\u5305\u7684\u5B89\u5168\u6027"},{"level":3,"title":"17.8 \u79BB\u7EBF\u5305\u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF0C\u6709\u505A\u79BB\u7EBF\u5305\u589E\u91CF\u66F4\u65B0\u4E48","slug":"_17-8-\u79BB\u7EBF\u5305\u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF0C\u6709\u505A\u79BB\u7EBF\u5305\u589E\u91CF\u66F4\u65B0\u4E48"},{"level":3,"title":"17.8 bridge\u539F\u7406\u6709\u4E86\u89E3\u4E48","slug":"_17-8-bridge\u539F\u7406\u6709\u4E86\u89E3\u4E48"},{"level":3,"title":"17.9 \u5BF9\u9875\u9762\u7684\u5F02\u5E38\u76D1\u63A7\u6709\u4E86\u89E3\u5417","slug":"_17-9-\u5BF9\u9875\u9762\u7684\u5F02\u5E38\u76D1\u63A7\u6709\u4E86\u89E3\u5417"},{"level":3,"title":"17.10 \u5C4F\u5E55\u5185\u6709\u4E00\u4E2A\u77E9\u5F62\uFF0C\u6709\u4E00\u6761\u5BF9\u89D2\u7EBF\uFF0C\u5982\u679C\u5728\u77E9\u5F62\u4E0A\u70B9\u51FB\uFF0C\u5982\u4F55\u5224\u65AD\u70B9\u51FB\u7684\u4F4D\u7F6E\u662F\u5728\u5BF9\u89D2\u7EBF\u4E0A\u65B9\uFF0C\u8FD8\u662F\u4E0B\u65B9\uFF0C\u8FD8\u662F\u70B9\u5230\u4E86\u5BF9\u89D2\u7EBF\u4E0A","slug":"_17-10-\u5C4F\u5E55\u5185\u6709\u4E00\u4E2A\u77E9\u5F62\uFF0C\u6709\u4E00\u6761\u5BF9\u89D2\u7EBF\uFF0C\u5982\u679C\u5728\u77E9\u5F62\u4E0A\u70B9\u51FB\uFF0C\u5982\u4F55\u5224\u65AD\u70B9\u51FB\u7684\u4F4D\u7F6E\u662F\u5728\u5BF9\u89D2\u7EBF\u4E0A\u65B9\uFF0C\u8FD8\u662F\u4E0B\u65B9\uFF0C\u8FD8\u662F\u70B9\u5230\u4E86\u5BF9\u89D2\u7EBF\u4E0A"},{"level":3,"title":"17.11 \u5982\u679C\u60F3\u7ED9\u8FD9\u4E2A\u77E9\u5F62\u753B\u4E2A\u5BF9\u89D2\u7EBF\uFF0C\u53EF\u4EE5\u6709\u54EA\u4E9B\u65B9\u5F0F","slug":"_17-11-\u5982\u679C\u60F3\u7ED9\u8FD9\u4E2A\u77E9\u5F62\u753B\u4E2A\u5BF9\u89D2\u7EBF\uFF0C\u53EF\u4EE5\u6709\u54EA\u4E9B\u65B9\u5F0F"},{"level":3,"title":"17.12 \u6570\u636E\u53EF\u89C6\u5316\u662F\u5982\u4F55\u505A\u7684","slug":"_17-12-\u6570\u636E\u53EF\u89C6\u5316\u662F\u5982\u4F55\u505A\u7684"},{"level":3,"title":"17.13 \u90FD\u505A\u8FC7\u54EA\u4E9B\u65B9\u9762\u7684\u91CD\u6784\uFF0C\u91CD\u6784\u90FD\u505A\u4E86\u54EA\u4E9B\u4F18\u5316","slug":"_17-13-\u90FD\u505A\u8FC7\u54EA\u4E9B\u65B9\u9762\u7684\u91CD\u6784\uFF0C\u91CD\u6784\u90FD\u505A\u4E86\u54EA\u4E9B\u4F18\u5316"},{"level":3,"title":"17.18 \u6362\u80A4\u65B9\u6848\u662F\u5982\u4F55\u505A\u7684","slug":"_17-18-\u6362\u80A4\u65B9\u6848\u662F\u5982\u4F55\u505A\u7684"},{"level":3,"title":"17.19 \u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u4F20\u5165\u4E00\u4E2Aurl\u7684\u6570\u7EC4\u548C\u4E00\u4E2A\u6570\u5B57\uFF0C\u5BF9url\u8FDB\u884C\u8BF7\u6C42\uFF0C\u5E76\u6839\u636E\u6570\u5B57\u9650\u5236\u6700\u5927\u8BF7\u6C42\u6570","slug":"_17-19-\u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u4F20\u5165\u4E00\u4E2Aurl\u7684\u6570\u7EC4\u548C\u4E00\u4E2A\u6570\u5B57\uFF0C\u5BF9url\u8FDB\u884C\u8BF7\u6C42\uFF0C\u5E76\u6839\u636E\u6570\u5B57\u9650\u5236\u6700\u5927\u8BF7\u6C42\u6570"},{"level":3,"title":"17.20 get\u8BF7\u6C42\u662F\u5426\u53EF\u4EE5\u4F20\u56FE\u7247","slug":"_17-20-get\u8BF7\u6C42\u662F\u5426\u53EF\u4EE5\u4F20\u56FE\u7247"},{"level":3,"title":"17.21 \u5B9E\u73B0\u6A21\u677F\u5B57\u7B26\u4E32","slug":"_17-21-\u5B9E\u73B0\u6A21\u677F\u5B57\u7B26\u4E32"},{"level":3,"title":"17.22 B/S C/S \u67B6\u6784\u7684\u5B9A\u4E49\u662F\u4EC0\u4E48\uFF1F","slug":"_17-22-b-s-c-s-\u67B6\u6784\u7684\u5B9A\u4E49\u662F\u4EC0\u4E48\uFF1F"},{"level":3,"title":"17.23 pdf \u89E3\u6790\u662F\u600E\u6837\u505A\u7684\uFF1F \u3010\u53EF\u7565\u3011","slug":"_17-23-pdf-\u89E3\u6790\u662F\u600E\u6837\u505A\u7684\uFF1F-\u3010\u53EF\u7565\u3011"},{"level":3,"title":"17.24 \u63CF\u8FF0\u4E00\u4E0B\u9879\u76EE\u7684\u6570\u636E\u5E93\u8BBE\u8BA1","slug":"_17-24-\u63CF\u8FF0\u4E00\u4E0B\u9879\u76EE\u7684\u6570\u636E\u5E93\u8BBE\u8BA1"},{"level":3,"title":"2.\u5370\u8C61\u6DF1\u523B\u7684\u6545\u969C\u89E3\u51B3\u6D41\u7A0B","slug":"_2-\u5370\u8C61\u6DF1\u523B\u7684\u6545\u969C\u89E3\u51B3\u6D41\u7A0B"},{"level":3,"title":"1.\u62FF\u5230\u4E00\u4E2A\u9700\u6C42\u529F\u80FD\uFF0C\u4F60\u7684\u5F00\u53D1\u6B65\u9AA4","slug":"_1-\u62FF\u5230\u4E00\u4E2A\u9700\u6C42\u529F\u80FD\uFF0C\u4F60\u7684\u5F00\u53D1\u6B65\u9AA4"},{"level":2,"title":"18 \u6E90\u7801","slug":"_18-\u6E90\u7801"},{"level":3,"title":"18.1 Vue\u548CReact\u6E90\u7801\u8BFB\u8FC7\u54EA\u4E9B\u90E8\u5206\uFF0C\u5370\u8C61\u6700\u6DF1\u523B\u7684\u662F\u54EA\u4E9B","slug":"_18-1-vue\u548Creact\u6E90\u7801\u8BFB\u8FC7\u54EA\u4E9B\u90E8\u5206\uFF0C\u5370\u8C61\u6700\u6DF1\u523B\u7684\u662F\u54EA\u4E9B"},{"level":3,"title":"18.2 \u6709\u6CA1\u6709\u4E86\u89E3\u8FC7 vue \u6E90\u7801\uFF1F","slug":"_18-2-\u6709\u6CA1\u6709\u4E86\u89E3\u8FC7-vue-\u6E90\u7801\uFF1F"},{"level":3,"title":"18.2 \u5C0F\u7A0B\u5E8F\u548CH5\u90FD\u6709\u54EA\u4E9B\u533A\u522B\uFF0C\u6709\u770B\u8FC7\u5C0F\u7A0B\u5E8F\u5E95\u5C42\u5982\u4F55\u5B9E\u73B0\u7684\u4E48","slug":"_18-2-\u5C0F\u7A0B\u5E8F\u548Ch5\u90FD\u6709\u54EA\u4E9B\u533A\u522B\uFF0C\u6709\u770B\u8FC7\u5C0F\u7A0B\u5E8F\u5E95\u5C42\u5982\u4F55\u5B9E\u73B0\u7684\u4E48"},{"level":2,"title":"19. \u81EA\u8EAB\u60C5\u51B5","slug":"_19-\u81EA\u8EAB\u60C5\u51B5"},{"level":3,"title":"19.1 \u81EA\u6211\u4ECB\u7ECD","slug":"_19-1-\u81EA\u6211\u4ECB\u7ECD"},{"level":3,"title":"19.2 \u4F18\u52BF\u548C\u52A3\u52BF","slug":"_19-2-\u4F18\u52BF\u548C\u52A3\u52BF"},{"level":3,"title":"19.\u6700\u8FD1\u4E24\u5BB6\u53EA\u5F85\u4E86\u4E00\u5E74\u5C31\u79BB\u804C\u7684\u539F\u56E0","slug":"_19-\u6700\u8FD1\u4E24\u5BB6\u53EA\u5F85\u4E86\u4E00\u5E74\u5C31\u79BB\u804C\u7684\u539F\u56E0"},{"level":3,"title":"19. \u4F60\u89C9\u5F97\u5728\u54EA\u5BB6\u516C\u53F8\u6536\u83B7\u6700\u5927","slug":"_19-\u4F60\u89C9\u5F97\u5728\u54EA\u5BB6\u516C\u53F8\u6536\u83B7\u6700\u5927"},{"level":3,"title":"19.\u5982\u4F55\u5728\u54EA\u4E9B\u4E8B\u4EF6\u53EF\u4EE5\u8868\u73B0\u4F60\u7684\u6297\u538B\u80FD\u529B","slug":"_19-\u5982\u4F55\u5728\u54EA\u4E9B\u4E8B\u4EF6\u53EF\u4EE5\u8868\u73B0\u4F60\u7684\u6297\u538B\u80FD\u529B"},{"level":3,"title":"19.3 \u4F60\u6709\u4EC0\u4E48\u60F3\u95EE\u6211\u7684","slug":"_19-3-\u4F60\u6709\u4EC0\u4E48\u60F3\u95EE\u6211\u7684"},{"level":3,"title":"19.4 \u505A\u4E86\u54EA\u4E9B\u9879\u76EE\uFF1B","slug":"_19-4-\u505A\u4E86\u54EA\u4E9B\u9879\u76EE\uFF1B"},{"level":3,"title":"19.5\u5E73\u65F6\u5982\u4F55\u5B66\u4E60","slug":"_19-5\u5E73\u65F6\u5982\u4F55\u5B66\u4E60"},{"level":3,"title":"19.6 \u8FD9\u6B21\u6362\u5DE5\u4F5C\u8003\u8651\u7684\u662F\u4EC0\u4E48/\u671F\u5F85\u4EC0\u4E48","slug":"_19-6-\u8FD9\u6B21\u6362\u5DE5\u4F5C\u8003\u8651\u7684\u662F\u4EC0\u4E48-\u671F\u5F85\u4EC0\u4E48"},{"level":3,"title":"19.7 \u4E0B\u4E00\u6B65\u6709\u54EA\u4E9B\u89C4\u5212/\u4E2A\u4EBA\u804C\u4E1A\u89C4\u5212","slug":"_19-7-\u4E0B\u4E00\u6B65\u6709\u54EA\u4E9B\u89C4\u5212-\u4E2A\u4EBA\u804C\u4E1A\u89C4\u5212"},{"level":3,"title":"19.8 \u4E3A\u4EC0\u4E48\u60F3\u505A\u5168\u6808\uFF1F","slug":"_19-8-\u4E3A\u4EC0\u4E48\u60F3\u505A\u5168\u6808\uFF1F"},{"level":3,"title":"19.9 \u671F\u5F85\u85AA\u8D44","slug":"_19-9-\u671F\u5F85\u85AA\u8D44"},{"level":3,"title":"19.4 \u5982\u4F55\u80FD\u521B\u9020\u51FA\u4E00\u4E2A\u6280\u672F\u4EA7\u54C1","slug":"_19-4-\u5982\u4F55\u80FD\u521B\u9020\u51FA\u4E00\u4E2A\u6280\u672F\u4EA7\u54C1"},{"level":3,"title":"19.5  \u5728\u4E0A\u5BB6\u516C\u53F8\u6700\u5927\u7684\u6210\u957F\u662F\u4EC0\u4E48","slug":"_19-5-\u5728\u4E0A\u5BB6\u516C\u53F8\u6700\u5927\u7684\u6210\u957F\u662F\u4EC0\u4E48"},{"level":3,"title":"19.4 \u5BF9\u4E0A\u5BB6\u516C\u53F8\u7684\u611F\u53D7\uFF0C\u81EA\u5DF1\u7684\u6210\u957F\uFF0C\u4E0D\u6EE1\u7684\u5730\u65B9","slug":"_19-4-\u5BF9\u4E0A\u5BB6\u516C\u53F8\u7684\u611F\u53D7\uFF0C\u81EA\u5DF1\u7684\u6210\u957F\uFF0C\u4E0D\u6EE1\u7684\u5730\u65B9"},{"level":3,"title":"19.8 \u4E4B\u524D\u5DE5\u4F5C\u4E2D\u7684\u4EAE\u70B9","slug":"_19-8-\u4E4B\u524D\u5DE5\u4F5C\u4E2D\u7684\u4EAE\u70B9"},{"level":3,"title":"19.9 \u7EC4\u4EF6\u5E93\u6709\u505A\u8FC7\u5417","slug":"_19-9-\u7EC4\u4EF6\u5E93\u6709\u505A\u8FC7\u5417"},{"level":3,"title":"19.10.\u7EC4\u4EF6\u5E93\u6709\u505A\u62BD\u53D6\u590D\u7528\u5904\u7406\u3002","slug":"_19-10-\u7EC4\u4EF6\u5E93\u6709\u505A\u62BD\u53D6\u590D\u7528\u5904\u7406\u3002"},{"level":2,"title":"11.\u7B97\u6CD5","slug":"_11-\u7B97\u6CD5"},{"level":3,"title":"6.1 \u7ED9\u4F60\u4E00\u4E2A\u5DF2\u7ECF\u5347\u5E8F\u6392\u5217\u7684\u6570\u7EC4\uFF0C\u7ED9\u4E00\u4E2A\u6570\u5B57\uFF0C\u627E\u4E00\u4E0B\u8FD9\u4E2A\u6570\u5B57\u5728\u8FD9\u4E2A\u6570\u7EC4\u91CC\u51FA\u73B0\u4E86\u51E0\u6B21","slug":"_6-1-\u7ED9\u4F60\u4E00\u4E2A\u5DF2\u7ECF\u5347\u5E8F\u6392\u5217\u7684\u6570\u7EC4\uFF0C\u7ED9\u4E00\u4E2A\u6570\u5B57\uFF0C\u627E\u4E00\u4E0B\u8FD9\u4E2A\u6570\u5B57\u5728\u8FD9\u4E2A\u6570\u7EC4\u91CC\u51FA\u73B0\u4E86\u51E0\u6B21"},{"level":3,"title":"6.2 \u6D17\u724C\u7B97\u6CD5\uFF0C\u5982\u4F55\u9A8C\u8BC1\u8FD9\u4E2A\u6D17\u724C\u7B97\u6CD5\u53EF\u4EE5\u628A\u724C\u6D17\u5F97\u8DB3\u591F\u4E71","slug":"_6-2-\u6D17\u724C\u7B97\u6CD5\uFF0C\u5982\u4F55\u9A8C\u8BC1\u8FD9\u4E2A\u6D17\u724C\u7B97\u6CD5\u53EF\u4EE5\u628A\u724C\u6D17\u5F97\u8DB3\u591F\u4E71"},{"level":3,"title":"6.3 \u5BF9\u8C61\u4F5C\u4E3Akey\u7684\u60C5\u51B5","slug":"_6-3-\u5BF9\u8C61\u4F5C\u4E3Akey\u7684\u60C5\u51B5"},{"level":3,"title":"6.5 promise.all\u6267\u884C","slug":"_6-5-promise-all\u6267\u884C"},{"level":3,"title":"6.6 \u4F7F\u7528js\u53EA\u53BB\u6389\u5DE6\u6216\u8005\u53F3\u8FB9\u7684\u5B57\u7B26\u4E32\u7A7A\u683C","slug":"_6-6-\u4F7F\u7528js\u53EA\u53BB\u6389\u5DE6\u6216\u8005\u53F3\u8FB9\u7684\u5B57\u7B26\u4E32\u7A7A\u683C"},{"level":3,"title":"6.7 \u6C42\u6590\u6CE2\u90A3\u5951\u6570\u5217\u7B2C N \u9879","slug":"_6-7-\u6C42\u6590\u6CE2\u90A3\u5951\u6570\u5217\u7B2C-n-\u9879"},{"level":3,"title":"6.8  \u7F16\u5199\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5224\u65AD\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u662F\u5408\u6CD5\u7684 XML","slug":"_6-8-\u7F16\u5199\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5224\u65AD\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u662F\u5408\u6CD5\u7684-xml"},{"level":3,"title":"6.9  \u5728\u4E00\u4E2A\u77E9\u9635\u4E2D\u67E5\u627E\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u53EF\u4EE5\u4E0A\u4E0B\u5DE6\u53F3\u79FB\u52A8\uFF0C\u4F46\u662F\u4E0D\u80FD\u56DE\u5934\uFF0C\u5982\u679C\u80FD\u627E\u5230\u8FD9\u4E2A\u5B57\u7B26\u4E32\u8FD4\u56DE true","slug":"_6-9-\u5728\u4E00\u4E2A\u77E9\u9635\u4E2D\u67E5\u627E\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u53EF\u4EE5\u4E0A\u4E0B\u5DE6\u53F3\u79FB\u52A8\uFF0C\u4F46\u662F\u4E0D\u80FD\u56DE\u5934\uFF0C\u5982\u679C\u80FD\u627E\u5230\u8FD9\u4E2A\u5B57\u7B26\u4E32\u8FD4\u56DE-true"},{"level":3,"title":"6.10 \u9752\u86D9\u8DF3\u53F0\u9636\uFF0C\u4E00\u6B21\u53EF\u4EE5\u8DF3 1 \u9636\uFF0C2 \u9636\u6216\u8005 3 \u9636\uFF0C\u5982\u679C\u60F3\u8DF3\u4E0A\u4E00\u4E2A N \u9636\u5171\u6709\u51E0\u79CD\u8DF3\u6CD5","slug":"_6-10-\u9752\u86D9\u8DF3\u53F0\u9636\uFF0C\u4E00\u6B21\u53EF\u4EE5\u8DF3-1-\u9636\uFF0C2-\u9636\u6216\u8005-3-\u9636\uFF0C\u5982\u679C\u60F3\u8DF3\u4E0A\u4E00\u4E2A-n-\u9636\u5171\u6709\u51E0\u79CD\u8DF3\u6CD5"},{"level":3,"title":"6.11 \u8282\u6D41\u548C\u9632\u6296","slug":"_6-11-\u8282\u6D41\u548C\u9632\u6296"},{"level":3,"title":"6.12 \u5927\u6570\u52A0\u6CD5\u5982\u4F55\u5B9E\u73B0","slug":"_6-12-\u5927\u6570\u52A0\u6CD5\u5982\u4F55\u5B9E\u73B0"},{"level":3,"title":"4.\u7B97\u6CD5\uFF1A","slug":"_4-\u7B97\u6CD5\uFF1A"},{"level":3,"title":"5.\u91CD\u5199console.log\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u6BCF\u6B21\u6253\u5370\u7ED3\u679C\u4E4B\u524D\u589E\u52A0\u4E00\u4E2A\u6253\u5370\u65F6\u95F4\u6233","slug":"_5-\u91CD\u5199console-log\u65B9\u6CD5\uFF0C\u5B9E\u73B0\u6BCF\u6B21\u6253\u5370\u7ED3\u679C\u4E4B\u524D\u589E\u52A0\u4E00\u4E2A\u6253\u5370\u65F6\u95F4\u6233"},{"level":3,"title":"6.13 \u5199\u4E2A\u4E8C\u53C9\u6811\u904D\u5386","slug":"_6-13-\u5199\u4E2A\u4E8C\u53C9\u6811\u904D\u5386"},{"level":3,"title":"6.14 \u6DF1\u5EA6\u4F18\u5148\u5E7F\u5EA6\u4F18\u5148","slug":"_6-14-\u6DF1\u5EA6\u4F18\u5148\u5E7F\u5EA6\u4F18\u5148"},{"level":3,"title":"6.15\u8F93\u5165\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u9047\u5230\u65B9\u62EC\u53F7\u5219\u5BF9\u65B9\u62EC\u53F7\u5185\u7684\u5B57\u7B26\u4E32\u91CD\u590Dn\u6B21\uFF0Cn\u662F\u65B9\u62EC\u53F7\u524D\u9762\u7684\u6570\u5B57\uFF0C\u5982\u679C\u6CA1\u6709\u6570\u5B57\u5219\u4E3A1\u6B21\uFF0C\u53EF\u80FD\u5B58\u5728\u5D4C\u5957","slug":"_6-15\u8F93\u5165\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u9047\u5230\u65B9\u62EC\u53F7\u5219\u5BF9\u65B9\u62EC\u53F7\u5185\u7684\u5B57\u7B26\u4E32\u91CD\u590Dn\u6B21\uFF0Cn\u662F\u65B9\u62EC\u53F7\u524D\u9762\u7684\u6570\u5B57\uFF0C\u5982\u679C\u6CA1\u6709\u6570\u5B57\u5219\u4E3A1\u6B21\uFF0C\u53EF\u80FD\u5B58\u5728\u5D4C\u5957"},{"level":3,"title":"6.16 \u7B97\u6CD5","slug":"_6-16-\u7B97\u6CD5"},{"level":3,"title":"6.17 \u67EF\u91CC\u5316\u3010\u5FC5\u80CC\u3011","slug":"_6-17-\u67EF\u91CC\u5316\u3010\u5FC5\u80CC\u3011"},{"level":3,"title":"6.17 \u7B97\u6CD5","slug":"_6-17-\u7B97\u6CD5"},{"level":3,"title":"6.18\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u6BCF\u4E00\u9879\u4EE3\u8868\u4E00\u4E2A\u7EBF\u6BB5\u7684\u8D77\u6B62\u4F4D\u7F6E\uFF0C\u8BA1\u7B97\u6240\u6709\u7EBF\u6BB5\u8986\u76D6\u7684\u957F\u5EA6\u603B\u91CF\uFF0C\u5E76\u7F16\u5199\u6D4B\u8BD5\u7528\u4F8B","slug":"_6-18\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F20\u5165\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u6BCF\u4E00\u9879\u4EE3\u8868\u4E00\u4E2A\u7EBF\u6BB5\u7684\u8D77\u6B62\u4F4D\u7F6E\uFF0C\u8BA1\u7B97\u6240\u6709\u7EBF\u6BB5\u8986\u76D6\u7684\u957F\u5EA6\u603B\u91CF\uFF0C\u5E76\u7F16\u5199\u6D4B\u8BD5\u7528\u4F8B"},{"level":3,"title":"7.19 \u8BA1\u7B97\u4E00\u4E2A\u77E9\u9635\u5185\uFF0C\u6240\u6709 1 \u8986\u76D6\u7684\u533A\u57DF\uFF08\u5C9B\u5C7F\u95EE\u9898\uFF09","slug":"_7-19-\u8BA1\u7B97\u4E00\u4E2A\u77E9\u9635\u5185\uFF0C\u6240\u6709-1-\u8986\u76D6\u7684\u533A\u57DF\uFF08\u5C9B\u5C7F\u95EE\u9898\uFF09"},{"level":3,"title":"7.20 \u53CD\u8F6C\u94FE\u8868","slug":"_7-20-\u53CD\u8F6C\u94FE\u8868"},{"level":3,"title":"7.20 \u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u5168\u6392\u5217","slug":"_7-20-\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u5168\u6392\u5217"},{"level":3,"title":"7.21 \u4E8C\u5206\u67E5\u627E\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u662F\u591A\u5C11\uFF0C\u7B80\u8981\u63CF\u8FF0\u4E00\u4E0B\u8FC7\u7A0B\uFF0CO(logN)\u662F\u600E\u4E48\u7B97\u51FA\u6765\u7684\uFF0CTopK \u7684\u65F6\u95F4\u590D\u6742\u5EA6\u662F\u591A\u5C11\uFF0C\u5FEB\u6392\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u662F\u591A\u5C11","slug":"_7-21-\u4E8C\u5206\u67E5\u627E\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u662F\u591A\u5C11\uFF0C\u7B80\u8981\u63CF\u8FF0\u4E00\u4E0B\u8FC7\u7A0B\uFF0Co-logn-\u662F\u600E\u4E48\u7B97\u51FA\u6765\u7684\uFF0Ctopk-\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u662F\u591A\u5C11\uFF0C\u5FEB\u6392\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u662F\u591A\u5C11"},{"level":3,"title":"6.22 \u5982\u679C\u8BA9\u4F60\u5B9E\u73B0\u4E00\u4E2A\u8BA1\u7B97\u5668\uFF0C\u90FD\u9700\u8981\u8003\u8651\u54EA\u4E9B\u95EE\u9898","slug":"_6-22-\u5982\u679C\u8BA9\u4F60\u5B9E\u73B0\u4E00\u4E2A\u8BA1\u7B97\u5668\uFF0C\u90FD\u9700\u8981\u8003\u8651\u54EA\u4E9B\u95EE\u9898"},{"level":3,"title":"6.23 \u63A5\u89E6\u8FC7\u54EA\u4E9B\u6392\u5E8F\u7B97\u6CD5\uFF0C\u5F52\u5E76\u6392\u5E8F\u7684\u601D\u8DEF\u662F\u4EC0\u4E48\uFF0C\u4E00\u4E2A\u6570\u7EC4\u505A\u5F52\u5E76\u6392\u5E8F\u7684\u8BDD\uFF0C\u4E00\u5171\u7ECF\u5386\u4E86\u591A\u5C11\u6B21\u5408\u5E76","slug":"_6-23-\u63A5\u89E6\u8FC7\u54EA\u4E9B\u6392\u5E8F\u7B97\u6CD5\uFF0C\u5F52\u5E76\u6392\u5E8F\u7684\u601D\u8DEF\u662F\u4EC0\u4E48\uFF0C\u4E00\u4E2A\u6570\u7EC4\u505A\u5F52\u5E76\u6392\u5E8F\u7684\u8BDD\uFF0C\u4E00\u5171\u7ECF\u5386\u4E86\u591A\u5C11\u6B21\u5408\u5E76"},{"level":3,"title":"6.24 JS \u9012\u5F52\u6811\u7ED3\u6784\u6570\u636E\u67E5\u627E\u6240\u6709\u53F6\u5B50\u8282\u70B9","slug":"_6-24-js-\u9012\u5F52\u6811\u7ED3\u6784\u6570\u636E\u67E5\u627E\u6240\u6709\u53F6\u5B50\u8282\u70B9"},{"level":3,"title":"6.25 \u5199\u4E00\u5171\u83B7\u53D6URL\u540E\u7684\u53C2\u6570\u7684\u65B9\u6CD5","slug":"_6-25-\u5199\u4E00\u5171\u83B7\u53D6url\u540E\u7684\u53C2\u6570\u7684\u65B9\u6CD5"},{"level":3,"title":"6.26 \u6B63\u5219\u8868\u8FBE\u5F0F","slug":"_6-26-\u6B63\u5219\u8868\u8FBE\u5F0F"},{"level":3,"title":"6.27 \u6570\u7EC4\u8F6C\u6811\u7ED3\u6784","slug":"_6-27-\u6570\u7EC4\u8F6C\u6811\u7ED3\u6784"},{"level":3,"title":"6.18 \u8F6C\u6362\u683C\u5F0F","slug":"_6-18-\u8F6C\u6362\u683C\u5F0F"},{"level":3,"title":"6.19 a==1&&a==2\u6709\u4EC0\u4E48\u65B9\u5F0F\u8BA9\u5B83\u8FD4\u56DEtrue","slug":"_6-19-a-1-a-2\u6709\u4EC0\u4E48\u65B9\u5F0F\u8BA9\u5B83\u8FD4\u56DEtrue"},{"level":3,"title":"6.21 \u6C42\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u4E0D\u91CD\u590D\u7684\u6700\u957F\u5B57\u4E32\u7684\u957F\u5EA6","slug":"_6-21-\u6C42\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u4E0D\u91CD\u590D\u7684\u6700\u957F\u5B57\u4E32\u7684\u957F\u5EA6"},{"level":3,"title":"6.22  \u5355\u5411\u94FE\u8868\u53CD\u8F6C","slug":"_6-22-\u5355\u5411\u94FE\u8868\u53CD\u8F6C"},{"level":3,"title":"6.23 \u8F93\u51FA\u6570\u7EC4\u4E2D\u9891\u7387\u7B2C\u4E8C\u9AD8\u7684\u5143\u7D20\u7684\u4E0B\u6807","slug":"_6-23-\u8F93\u51FA\u6570\u7EC4\u4E2D\u9891\u7387\u7B2C\u4E8C\u9AD8\u7684\u5143\u7D20\u7684\u4E0B\u6807"},{"level":3,"title":"6.24 \u5E42\u7B49\u4E0E\u975E\u5E42\u7B49\u7684\u533A\u522B","slug":"_6-24-\u5E42\u7B49\u4E0E\u975E\u5E42\u7B49\u7684\u533A\u522B"},{"level":3,"title":"6.25 \u7B97\u6CD5","slug":"_6-25-\u7B97\u6CD5"},{"level":3,"title":"6.26 \u7B97\u6CD5","slug":"_6-26-\u7B97\u6CD5"},{"level":3,"title":"19. leetcode","slug":"_19-leetcode"},{"level":2,"title":"20 \u5269\u4F59\u95EE\u9898","slug":"_20-\u5269\u4F59\u95EE\u9898"}],"relativePath":"interview/4.md","lastUpdated":1653188599000}',p={},e=t("",556),o=[e];function c(l,u,r,i,k,d){return s(),a("div",null,o)}var m=n(p,[["render",c]]);export{g as __pageData,m as default};