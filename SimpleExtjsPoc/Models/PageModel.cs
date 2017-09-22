using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;

namespace SimpleExtjsPoc.Models
{
    public static class extensionmethods
    {
        public static IQueryable<T> OrderByField<T>(this IQueryable<T> q, string field, string dir)
        {
            var param = Expression.Parameter(typeof(T), "p");
            var prop = Expression.Property(param, field);
            var exp = Expression.Lambda(prop, param);
            string method = (dir == "ASC") ? "OrderBy" : "OrderByDescending";
            Type[] types = new Type[] { q.ElementType, exp.Body.Type };
            var mce = Expression.Call(typeof(Queryable), method, types, q.Expression, exp);
            return q.Provider.CreateQuery<T>(mce);
        }
    }
    public class PageModel<T>
    {
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="list">The full list of items you would like to paginate</param>
        /// <param name="page">(optional) The current page number</param>
        /// <param name="limit">(optional) The size of the page</param>
        /// <param name="sort">(optional) The current page number</param>
        /// <param name="dir">(optional) The size of the page</param>


        public PageModel(IQueryable<T> list, int page, int limit, string sort, string dir)
        {
            _list = list;
            _page = page;
            _limit = limit;
            _sort = sort == null ? "id" : sort;
            _dir = dir == null ? "ASC" : dir;
        }

        private string _sort;
        private string _dir;
        
        private IQueryable<T> _list;

        /// <summary>
        /// The paginated result
        /// </summary>
        public IQueryable<T> items
        {
            get
            {
                if (_list == null) return null;
                //.OrderByField(_group, _groupDir)
                return _list.OrderByField(_sort, _dir).Skip((page - 1) * limit).Take(limit);
            }
        }

        private int? _page;
        /// <summary>
        ///  The current page.
        /// </summary>
        public int page
        {
            get
            {
                if (!_page.HasValue)
                {
                    return 1;
                }
                else
                {
                    return _page.Value;
                }
            }
        }

        private int? _limit;
        /// <summary>
        /// The size of the page.
        /// </summary>
        public int limit
        {
            get
            {
                if (!_limit.HasValue)
                {
                    return _list == null ? 0 : _list.Count();
                }
                else
                {
                    return _limit.Value;
                }
            }
        }

        /// <summary>
        /// The total number of items in the original list of items.
        /// </summary>
        public int totalCount
        {
            get
            {
                return _list == null ? 0 : _list.Count();
            }
        }
    }
}