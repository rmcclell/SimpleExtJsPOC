using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SimpleExtjsPoc.Models
{
    public class PageModel<T>
    {
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="list">The full list of items you would like to paginate</param>
        /// <param name="page">(optional) The current page number</param>
        /// <param name="limit">(optional) The size of the page</param>

        public PageModel(IQueryable<T> list, int? page = null, int? limit = null)
        {
            _list = list;
            _page = page;
            _limit = limit;
        }

        private IQueryable<T> _list;

        /// <summary>
        /// The paginated result
        /// </summary>
        public IQueryable<T> items
        {
            get
            {
                if (_list == null) return null;
                return _list.Skip((page - 1) * limit).Take(limit);
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