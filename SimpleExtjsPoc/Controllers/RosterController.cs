using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SimpleExtjsPoc.Models;

namespace SimpleExtjsPoc.Controllers
{
    public class RosterController : ApiController
    {
        private SimpleExtJsPocEntities db = new SimpleExtJsPocEntities();
        // GET: api/Roster
        public PageModel<Roster> Get(int page, int start, int limit)
        {
            return new PageModel<Roster>(db.Roster.OrderBy(r => r.id), page, limit);
            //return db.Roster.OrderBy(r => r.id).Skip(start).Take(limit).ToList();
        }

        // GET: api/Roster/5
        public Roster Get(int id)
        {
            return db.Roster.Where(s => s.id == id).SingleOrDefault();
        }

        // POST: api/Roster
        public int Post([FromBody]Roster value)
        {
            db.Roster.Add(value);
            return db.SaveChanges();
        }

        // PUT: api/Roster/5
        public int Put(int id, [FromBody]Roster value)
        {
            try
            {
                var record = db.Roster.Where(s => s.id == id).Single();
                record.age = value.age ?? record.age;
                record.batArm = value.batArm ?? record.batArm;
                record.birthplace = value.birthplace ?? record.birthplace;
                record.category = value.category ?? record.category;
                record.college = value.college ?? record.college;
                record.height = value.height ?? record.height;
                record.number = value.number ?? record.number;
                record.playerName = value.playerName ?? record.playerName;
                record.pos = value.pos ?? record.pos;
                record.salary = value.salary ?? record.salary;
                record.throwArm = value.throwArm ?? record.throwArm;
                record.weight = value.weight ?? record.weight;
                return db.SaveChanges();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        // DELETE: api/Roster/5
        public int Delete(int id)
        {
            try
            {
                var record = db.Roster.Where(s => s.id == id).Single();
                db.Roster.Remove(record);
                return db.SaveChanges();
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
